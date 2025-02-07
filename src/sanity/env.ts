export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-01'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skC9JosICwoHn08IaW6jZkWyCv58wfOOipVbcltHBuwErd2Fd6xroAkqcwtgECNmNSL40CnZo2p34zzTM33QrS9G8lBprYXwnm6HFDvZUusVvcdg1xoP4kILfjOTO5UY1Sw4b5nrFmHk01X8DQHgEfQxvVSTKw1O1H6On7BLt4SAQuB9Aw52",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
