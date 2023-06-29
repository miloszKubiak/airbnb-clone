import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { TAccommodationFormValues } from "../../types/accommodation";

export const useCreateAccommodation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (accommodation: TAccommodationFormValues) =>
      axios.post("/accommodations", accommodation),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["accommodations"] });
      toast.success(response.data.msg);
      navigate("/account/my-accommodations");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
