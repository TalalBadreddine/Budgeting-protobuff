// package: services.migrations
// file: migrations/prismConnection.proto

import * as jspb from "google-protobuf";
import * as utils_error_pb from "../utils/error_pb";

export class GenerateMigrationsResponse extends jspb.Message {
  hasError(): boolean;
  clearError(): void;
  getError(): utils_error_pb.ErrorMessage | undefined;
  setError(value?: utils_error_pb.ErrorMessage): void;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateMigrationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateMigrationsResponse): GenerateMigrationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateMigrationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateMigrationsResponse;
  static deserializeBinaryFromReader(message: GenerateMigrationsResponse, reader: jspb.BinaryReader): GenerateMigrationsResponse;
}

export namespace GenerateMigrationsResponse {
  export type AsObject = {
    error?: utils_error_pb.ErrorMessage.AsObject,
    status: string,
  }
}

export class GenerateMigrationsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateMigrationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateMigrationsRequest): GenerateMigrationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateMigrationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateMigrationsRequest;
  static deserializeBinaryFromReader(message: GenerateMigrationsRequest, reader: jspb.BinaryReader): GenerateMigrationsRequest;
}

export namespace GenerateMigrationsRequest {
  export type AsObject = {
  }
}

