type QsResponse = Record<string, any>;

interface NxStatic {
  qs(): QsResponse
  qs(path: string): QsResponse
}
