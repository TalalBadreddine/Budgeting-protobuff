To Generate Proto:

# Using  PowerShell:
- To generate in a specific folder :
```
protoc `--plugin=protoc-gen-ts=".\\node_modules\\bin\\protoc-gen-ts.cmd" `
   --ts_out=./services/migrations`
   --proto_path=./services/migrations `
   ./services/migrations/prismConnection.proto
```

- To generate directly in the same directory :

```
protoc --ts_out=. FILE_NAME.proto
```

- When importing from other packages go backward one directory and run this:
```
protoc  --ts_out=. DIRECTORY_NAME/FILE_NAME.proto
```