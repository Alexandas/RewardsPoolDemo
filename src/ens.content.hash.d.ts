declare module '@ensdomains/content-hash' {
	type Codec = 'ipfs-ns' | 'ipns-ns' | 'swarm-ns'

	export function decode(str: string): string
	export function getCodec(str: string): Codec
	export function encode(codec: Codec, hash: string): string

}