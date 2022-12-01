interface NxStatic {
  /**
   * Get response from input string.
   * @param path Path to the query string or a query string like.
   */
  qs(path?: string): Record<string, any>
}
