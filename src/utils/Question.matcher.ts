// services/question-matcher.ts
import faq from "@/utils/faq.json"
import { normalize, calculateSimilarity } from "./normalize"
import { FAQ } from "@/types/main/faq.types"

// Similarity threshold for matching (0.6 = 60% similarity)
const SIMILARITY_THRESHOLD = 0.6

export function matchQuestion(input: string): FAQ | null {
  if (!input || input.trim().length === 0) return null

  const normalizedInput = normalize(input)
  let bestMatch: FAQ | null = null
  let bestSimilarity = 0

  // First, try exact match
  for (const item of faq as FAQ[]) {
    const normalizedQuestion = normalize(item.question)
    if (normalizedQuestion === normalizedInput) {
      return item
    }

    for (const alt of item.alternatives) {
      const normalizedAlt = normalize(alt)
      if (normalizedAlt === normalizedInput) {
        return item
      }
    }
  }

  // If no exact match, try fuzzy matching
  for (const item of faq as FAQ[]) {
    // Check main question
    const questionSimilarity = calculateSimilarity(input, item.question)
    if (questionSimilarity > bestSimilarity) {
      bestSimilarity = questionSimilarity
      bestMatch = item
    }

    // Check alternatives
    for (const alt of item.alternatives) {
      const altSimilarity = calculateSimilarity(input, alt)
      if (altSimilarity > bestSimilarity) {
        bestSimilarity = altSimilarity
        bestMatch = item
      }
    }
  }

  // Return match if similarity is above threshold
  if (bestMatch && bestSimilarity >= SIMILARITY_THRESHOLD) {
    console.log(`Matched: "${input}" -> "${bestMatch.question}" (similarity: ${(bestSimilarity * 100).toFixed(1)}%)`)
    return bestMatch
  }

  console.log(`No match found for: "${input}" (best similarity: ${(bestSimilarity * 100).toFixed(1)}%)`)
  return null
}
