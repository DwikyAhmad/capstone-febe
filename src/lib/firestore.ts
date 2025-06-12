import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "./firebase";

export interface TempatWisata {
    id: string;
    age: number;
    category: string;
    city_x: string;
    description: string;
    latitude: number;
    longitude: number;
    location: string;
    place_id: number;
    place_name: string;
    price: number;
    rating: number;
    time_minutes: number;
    user_id: string;
}

export const fetchTempatWisata = async (): Promise<TempatWisata[]> => {
    try {
        // Create a query to get 10 items from tempat_wisata collection
        const q = query(collection(db, "tempat_wisata"), limit(9));
        const querySnapshot = await getDocs(q);


        const tempatWisataList: TempatWisata[] = [];
        querySnapshot.forEach((doc) => {
            tempatWisataList.push({
                id: doc.id,
                age: doc.data().Age,
                category: doc.data().Category,
                city_x: doc.data().City_x,
                description: doc.data().Description,
                latitude: doc.data().Lat,
                longitude: doc.data().Long,
                location: doc.data().Location,
                place_id: doc.data().Place_Id,
                place_name: doc.data().Place_Name,
                price: doc.data().Price,
                rating: doc.data().Rating,
                time_minutes: doc.data().Time_Minutes,
                user_id: doc.data().User_Id,
            });
        });


        return tempatWisataList;
    } catch (error) {
        console.error("Error fetching tempat wisata:", error);
        throw error;
    }
};
