/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from '@atproto/xrpc'

export interface QueryParams {}

export type InputSchema = undefined

export interface OutputSchema {
  inviteCodeRequired?: boolean
  availableUserDomains: string[]
  links?: Links
  [k: string]: unknown
}

export interface CallOptions {
  headers?: Headers
}

export interface Response {
  success: boolean
  headers: Headers
  data: OutputSchema
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
  }
  return e
}

export interface Links {
  privacyPolicy?: string
  termsOfService?: string
  [k: string]: unknown
}
