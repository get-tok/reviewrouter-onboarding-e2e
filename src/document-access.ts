/** Allow document access only to its owner; empty identities are denied. */
export function canReadDocument(actorId: string, ownerId: string): boolean {
  if (!actorId || !ownerId) return false;
  return actorId === ownerId;
}
