export default async function handler(req, res) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    res.status(500).json({ error: 'Falta configurar GOOGLE_PLACES_API_KEY o GOOGLE_PLACE_ID' })
    return
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
      res.status(response.status).json({ error: 'Error al consultar Google Places API' })
      return
    }

    const data = await response.json()

    const reviews = (data.reviews || []).map((review) => ({
      author: review.authorAttribution?.displayName ?? 'Anónimo',
      text: review.text?.text ?? '',
      rating: review.rating ?? 5,
      date: review.relativePublishTimeDescription ?? '',
    }))

    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate')
    res.status(200).json({
      rating: data.rating,
      userRatingCount: data.userRatingCount,
      reviews,
    })
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron obtener las reseñas' })
  }
}
