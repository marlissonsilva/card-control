export default interface UseCase<I, O> {
    toExecute(input: I): Promise<O>;
  }