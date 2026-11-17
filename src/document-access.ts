/** Allow document access only to its owner; empty or unrelated identities are denied. */
export function canReadDocument(actorId: string, ownerId: string): boolean {
  if (!actorId || !ownerId) return false;
  return actorId === ownerId;
}

/** Allow editing to the owner and to explicitly listed editors. */
export function canEditDocument(actorId: string, ownerId: string, editors: readonly string[]): boolean {
  if (canReadDocument(actorId, ownerId)) return true;
  return editors.some((editor) => editor === actorId || editor === "*");
}
