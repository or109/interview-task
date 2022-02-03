import { Inject, Injectable } from '@nestjs/common';
import { AddressPoolService } from './address-pool.service';

interface Peer {
  name: string;
  publicKey: string;
  virtualIP: string;
}

@Injectable()
export class AppService {
  private peers: { [key: string]: Peer } = {}; // should be stored in shared cache/db for sharing between instances and persistence

  @Inject()
  private readonly addressPoolService: AddressPoolService;

  getHello(): string {
    return 'Hello World!';
  }

  onboarding(name: string, publicKey: string) {
    if (this.peers[publicKey]) {
      return { virtualIP: this.peers[publicKey].virtualIP };
    }

    // Add a new peer
    const newPeer: Peer = {
      name,
      publicKey,
      virtualIP: this.addressPoolService.getNewVirtualIP(),
    };
    this.peers[publicKey] = newPeer;

    const otherPeers = Object.values(this.peers).filter(
      (peer: Peer) => peer.publicKey !== publicKey,
    );

    otherPeers.forEach((peer: Peer) => {
      this.notifyPeerHasJoined(peer, newPeer);
    });

    return { virtualIP: newPeer.virtualIP, peers: otherPeers };
  }

  offboarding(publicKey: string): boolean {
    const peerToDisconnect: Peer = this.peers[publicKey]; // we should allocate this

    if (!peerToDisconnect) {
      console.log('The peer does not exist in the VPN');
      return false;
    }

    Object.values(this.peers).forEach((peer: Peer) => {
      if (peer.publicKey !== peerToDisconnect.publicKey) {
        this.notifyPeerHasDisconnected(peer, peerToDisconnect.name);
      }
    });

    return true;
  }

  private notifyPeerHasJoined(peerToNotify: Peer, peerToJoin: Peer) {
    // might be able to notify the clients using web sockets
    console.log(
      `Hey ${peerToNotify.name}[${peerToNotify.virtualIP}]: ${peerToJoin.name} is at ${peerToJoin.virtualIP}. It's public key is ${peerToJoin.publicKey}`,
    );
  }

  private notifyPeerHasDisconnected(
    peerToNotify: Peer,
    peerToDisconnectName: string,
  ) {
    // might be able to notify the clients using web sockets
    console.log(
      `Hey ${peerToNotify.name}[${peerToNotify.virtualIP}]: ${peerToDisconnectName} has disconnect`,
    );
  }
}
