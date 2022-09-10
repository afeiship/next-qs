type QsResponse = Record<string, any>;

interface NxStatic {
  /**
   * Get response from a query string.
   */
  qs(): QsResponse

  /**
   * Get response from input string.
   * @param path Path to the query string or a query string like.
   */
  qs(path: string): QsResponse
}
