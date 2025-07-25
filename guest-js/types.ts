export interface MusicKitTrack {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  artworkUrl?: string;
  isExplicit: boolean;
  isPlayable: boolean;
}

export interface AuthorizationResponse {
  status: 'authorized' | 'notAuthorized' | 'error';
  error?: string;
}

export interface UnauthorizeResponse {
  status: 'unauthorized' | 'error';
  error?: string;
}

export interface AuthorizationStatusResponse {
  status: 'authorized' | 'notAuthorized' | 'notInitialized';
}

export interface QueueResponse {
  items: MusicKitTrack[];
  position: number;
}

export interface QueueOperationResponse {
  success: boolean;
  error?: string;
}

export interface QueueUpdateEvent {
  items: MusicKitTrack[];
  position: number;
}

export interface StateUpdateEvent {
  state: string; // "playing", "paused", "stopped", etc.
}

export interface TrackChangeEvent {
  track: {
    id: string;
    title: string;
    artistName: string;
    albumName: string;
    genreNames: string;
    durationInMillis: number;
    artwork: string;
  };
}

export interface PlaybackTimeEvent {
  currentTime: number;
}

export interface ErrorEvent {
  error: string;
  code?: string;
}

export interface MusicKitEventMap {
  'musickit-playback-state-changed': StateUpdateEvent;
  'musickit-track-changed': TrackChangeEvent;
  'musickit-playback-time-changed': PlaybackTimeEvent;
} 