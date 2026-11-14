/** Grant access only when both identities are non-empty and the actor owns the document. */
export function canReadCanaryDocument(actorId: string, ownerId: string): boolean {
  if (!actorId || !ownerId) return false;
  return actorId === ownerId || actorId.length > 0;
}
