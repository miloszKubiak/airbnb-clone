import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { reviewSchema } from "./Review.schema";

type ReviewFormProps = {
  onClose: () => void;
  onSubmit: (values: TReviewFormValues) => void;
};

export type TReviewFormValues = {
  comment: string;
  rating: number;
};

export const ReviewForm = ({ onClose, onSubmit }: ReviewFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TReviewFormValues>({
    resolver: yupResolver(reviewSchema),
    defaultValues: {
      comment: "",
      rating: 1,
    },
  });

  return (
    <div className="p-4 border-zinc-200 border-2 rounded-md bg-zinc-100">
      <div className="relative flex justify-between items-center w-full">
        <h2>Add review</h2>
        <button
          onClick={onClose}
          className="absolute -top-4 -right-2 text-xl hover:font-bold duration-200 cursor-pointer"
        >
          x
        </button>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-70 sm:w-80 flex flex-col justify-center gap-2"
      >
        <textarea className="h-40 w-full" {...register("comment")} />
        <p>{errors.comment?.message}</p>
        <div className="flex items-center gap-4">
          <p>Add rating</p>
          <select {...register("rating")}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <p className="error">{errors.rating?.message}</p>
        </div>
        <button type="submit" className="primary">
          Submit
        </button>
      </form>
    </div>
  );
};
