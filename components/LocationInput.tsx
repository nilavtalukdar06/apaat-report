"use client";
import { useState } from "react";
// import { AddressAutoFill } from "@mapbox/search-js-react";

interface LocationProps {
  value: string;
  onChange: (value: string) => void;
  onCoordinatesChange?: (lat: number | null, lng: number | null) => void;
}

export default function LocationInput({
  value,
  onChange,
  onCoordinatesChange,
}: LocationProps) {
  const [isGettingLocation, setIsGettingLocation] = useState<boolean>(false);
  const [locationError, setLocationError] = useState<any>(null);

  const getLocation = async () => {
    setIsGettingLocation(true);
    try {
      if (!navigator.geolocation) {
        throw new Error("Geolocation is not supported by your browser");
      }

      const position = await new Promise<GeolocationPosition>(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            resolve,
            (error) => {
              switch (error.code) {
                case error.PERMISSION_DENIED:
                  reject(
                    new Error(
                      "Please allow location access in your browser settings"
                    )
                  );
                  break;
                case error.POSITION_UNAVAILABLE:
                  reject(new Error("Location information is unavailable"));
                  break;
                case error.TIMEOUT:
                  reject(new Error("Location request timed out"));
                  break;
                default:
                  reject(new Error("An unknown error occurred"));
              }
            },
            {
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0,
            }
          );
        }
      );

      const { latitude, longitude } = position.coords;
      onCoordinatesChange?.(latitude, longitude);
      onChange(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
    } catch (error) {
      console.error("Location error:", error);
      setLocationError(
        error instanceof Error ? error.message : "Unable to get your location"
      );
    } finally {
      setIsGettingLocation(false);
    }
  };

  return (
    <div>
      <div>Location Input</div>
    </div>
  );
}
