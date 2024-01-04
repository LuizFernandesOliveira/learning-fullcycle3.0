# ------------------------ STAGE 1 -------------------------
FROM golang:alpine AS builder

WORKDIR /app

COPY ./src/main.go .

RUN go build main.go

# ------------------------ STAGE 2 -------------------------
FROM scratch 

WORKDIR /app

COPY --from=builder /app .

ENTRYPOINT [ "./main" ]