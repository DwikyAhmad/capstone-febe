import { API_URL } from "./config";
import { TempatWisata } from "./firestore";


export const fetchRecommendationsByCategory = async (
    category: string
): Promise<TempatWisata[]> => {
    try {
        console.log(`Fetching recommendations for category: ${category}`);

        const response = await fetch(`${API_URL}/get_recommendations/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                category: category,
            }),
        });

        if (!response.ok) {
            throw new Error(
                `Failed to fetch recommendations: ${response.status} ${response.statusText}`
            );
        }

        const data = await response.json();

        const tempatWisataList: TempatWisata[] = [];
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.forEach((doc: any) => {
            tempatWisataList.push({
                id: doc.id,
                age: doc.Age,
                category: doc.Category,
                city_x: doc.City_x,
                description: doc.Description,
                latitude: doc.Lat,
                longitude: doc.Long,
                location: doc.Location,
                place_id: doc.Place_Id,
                place_name: doc.Place_Name,
                price: doc.Price,
                rating: doc.Rating,
                time_minutes: doc.Time_Minutes,
                user_id: doc.User_Id,
            });
        })

        return tempatWisataList;
    } catch (error) {
        console.error("Error fetching recommendations:", error);
        throw new Error(
            error instanceof Error
                ? `Failed to fetch recommendations: ${error.message}`
                : "Failed to fetch recommendations"
        );
    }
};
