export default class JitsiEventEmitter<T> { // TODO: is this defined somewhere?
  emit: ( name: T, id: string, arguments: unknown ) => void; // TODO:
}
