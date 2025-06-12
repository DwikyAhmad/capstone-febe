import {
    collection,
    addDoc,
    deleteDoc,
    query,
    where,
    getDocs,
    doc,
    serverTimestamp,
} from "firebase/firestore";
import { User } from "firebase/auth";
import { db } from "./firebase";
import { TempatWisata } from "./firestore";

export interface Favorite {
    id?: string;
    userId: string;
    placeName: string;
    category: string;
    location: string;
    rating: number;
    price: number;
    description: string;
    cityX?: string;
    addedAt: ReturnType<typeof serverTimestamp>;
}

export const addToFavorites = async (
    user: User,
    tempatWisata: TempatWisata
): Promise<void> => {
    try {
        const placeName = tempatWisata.place_name || "Unnamed Place";

        // Check if already favorited
        const existingFavorite = await checkIfFavorited(user.uid, placeName);
        if (existingFavorite) {
            console.log("Item is already in favorites");
            return;
        }

        // Add to favorites collection
        const favoriteData: Omit<Favorite, "id"> = {
            userId: user.uid,
            placeName: placeName,
            category: tempatWisata.category,
            location: tempatWisata.location || "Unnamed Location",
            rating: tempatWisata.rating,
            price: tempatWisata.price || 0,
            description: tempatWisata.description || "No description available",
            cityX: tempatWisata.city_x,
            addedAt: serverTimestamp(),
        };

        await addDoc(collection(db, "favorites"), favoriteData);
        console.log("Successfully added to favorites:", placeName);
    } catch (error) {
        console.error("Error adding to favorites:", error);
        throw error;
    }
};

export const removeFromFavorites = async (
    user: User,
    placeName: string
): Promise<void> => {
    try {
        const q = query(
            collection(db, "favorites"),
            where("userId", "==", user.uid),
            where("placeName", "==", placeName)
        );

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            throw new Error("Favorite not found");
        }

        // Delete all matching documents (should be only one)
        const deletePromises = querySnapshot.docs.map((docSnapshot) =>
            deleteDoc(doc(db, "favorites", docSnapshot.id))
        );

        await Promise.all(deletePromises);
        console.log("Successfully removed from favorites");
    } catch (error) {
        console.error("Error removing from favorites:", error);
        throw error;
    }
};

export const checkIfFavorited = async (
    userId: string,
    placeName: string
): Promise<boolean> => {
    try {
        const q = query(
            collection(db, "favorites"),
            where("userId", "==", userId),
            where("placeName", "==", placeName)
        );

        const querySnapshot = await getDocs(q);
        return !querySnapshot.empty;
    } catch (error) {
        console.error("Error checking if favorited:", error);
        return false;
    }
};

export const getUserFavorites = async (userId: string): Promise<Favorite[]> => {
    try {
        const q = query(
            collection(db, "favorites"),
            where("userId", "==", userId)
        );

        const querySnapshot = await getDocs(q);

        return querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        })) as Favorite[];
    } catch (error) {
        console.error("Error fetching user favorites:", error);
        throw error;
    }
};
