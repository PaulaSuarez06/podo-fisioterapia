export default async function handler(request, context) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    return new Response(
      JSON.stringify({ error: 'Falta configurar GOOGLE_PLACES_API_KEY o GOOGLE_PLACE_ID' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    )
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount,reviews&languageCode=es`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
        },
      },
    )

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: 'Error al consultar Google Places API' }),
        { status: response.status, headers: { 'Content-Type': 'application/json' } },
      )
    }

    const data = await response.json()

    const reviews = (data.reviews || []).map((review) => ({
      author: review.authorAttribution?.displayName ?? 'Anónimo',
      text: review.text?.text ?? '',
      rating: review.rating ?? 5,
      date: review.relativePublishTimeDescription ?? '',
    }))

    return new Response(
      JSON.stringify({
        rating: data.rating,
        userRatingCount: data.userRatingCount,
        reviews,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
        },
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'No se pudieron obtener las reseñas' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    )
  }
}

export const config = {
  path: '/api/reviews',
}
