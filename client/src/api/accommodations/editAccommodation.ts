import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TAccommodationFormValues } from "../../types/accommodation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type editAccommodationProps = {
  accommodationId: string;
  accommodation: TAccommodationFormValues;
};

export const useEditAccommodation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ accommodationId, accommodation }: editAccommodationProps) =>
      axios.patch(`/accommodations/${accommodationId}`, {
        accommodationId,
        ...accommodation,
      }),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["accommodations"] });
      toast.success(response.data.msg);
      navigate("/account/my-accommodations");
    },
    onError: (error) => {
      toast.error("Something went wrong!");
      console.log(error);
    },
  });
};
