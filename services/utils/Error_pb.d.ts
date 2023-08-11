// package: utils
// file: Error.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class ErrorMessage extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): string;
  setMessage(value: string): void;

  hasNullError(): boolean;
  clearNullError(): void;
  getNullError(): google_protobuf_any_pb.Any | undefined;
  setNullError(value?: google_protobuf_any_pb.Any): void;

  getErrorCase(): ErrorMessage.ErrorCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorMessage): ErrorMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorMessage;
  static deserializeBinaryFromReader(message: ErrorMessage, reader: jspb.BinaryReader): ErrorMessage;
}

export namespace ErrorMessage {
  export type AsObject = {
    message: string,
    nullError?: google_protobuf_any_pb.Any.AsObject,
  }

  export enum ErrorCase {
    ERROR_NOT_SET = 0,
    MESSAGE = 1,
    NULL_ERROR = 2,
  }
}

