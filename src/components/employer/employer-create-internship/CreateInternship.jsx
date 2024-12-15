import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const CreateInternship = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // dispatch();

    reset();
  };

  console.log(errors);
  

  return (
    <div className="w-full py-10">
      <div className="w-1/2 bg-white rounded-lg text-zinc-600 border mx-auto px-10 py-5">
        <h1 className="w-full text-center text-2xl font-bold">
          Create Internship
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full mt-5 flex flex-col gap-5"
        >
          <div>
            <label htmlFor="profile" className="font-semibold">
              Profile
            </label>
            <input
              type="text"
              name="profile"
              placeholder="Enter internship profile"
              className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
              {...register("profile", { required: true })}
            />
            {errors.profile && errors.profile.type === "required" && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div>
            <label htmlFor="skill" className="font-semibold">
              Skill
            </label>
            <input
              type="text"
              name="skill"
              placeholder="Enter required skill"
              className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
              {...register("skill", { required: true })}
            />
            {errors.skill && errors.skill.type === "required" && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="w-full flex justify-between">
            <div className="w-[48%]">
              <label className="font-semibold">Internship Type</label>
              <select
                name="internshiptype"
                className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
                {...register("internshiptype", { required: true })}
              >
                <option value="In office">In office</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
            <div className="w-[48%]">
              <label htmlFor="opennings" className="font-semibold">
                Opennings
              </label>
              <input
                type="number"
                name="opennings"
                placeholder="Enter number of openings"
                className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
                {...register("opennings", { required: true })}
              />
              {errors.opennings && errors.opennings.type === "required" && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div className="w-[48%]">
              <label htmlFor="duration" className="font-semibold">
                From
              </label>
              <input
                type="date"
                name="from"
                placeholder="Start date"
                className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
                {...register("from", { required: true })}
              />
              {errors.from && errors.from.type === "required" && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="w-[48%]">
              <label htmlFor="duration" className="font-semibold">
                To
              </label>
              <input
                type="date"
                name="to"
                placeholder="End date"
                className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
                {...register("to", { required: true })}
              />
              {errors.to && errors.to.type === "required" && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div className="w-[48%]">
              <label className="font-semibold">Stipend Status</label>
              <select
                name="stipend.status"
                className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
                {...register("stipend.status", { required: true })}
              >
                <option value="Fixed">Fixed</option>
                <option value="Negotiable">Negotiable</option>
                <option value="Perforemance">Perforemance</option>
                <option value="Unpaid">Unpaid</option>
              </select>
            </div>
            <div className="w-[48%]">
              <label htmlFor="" className="font-semibold">
                Stipend Amount
              </label>
              <input
                type="number"
                name="stipend.amount"
                placeholder="Enter stipend amount"
                className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
                {...register("stipend.amount", { required: true })}
              />
              {errors.stipend?.amount &&
                errors.stipend?.amount.type === "required" && (
                  <span className="text-xs text-red-500">
                    This field is required
                  </span>
                )}
            </div>
          </div>
          <div>
            <label htmlFor="perks" className="font-semibold">
              Perks
            </label>
            <input
              type="text"
              name="perks"
              placeholder="Enter internship perks"
              className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
              {...register("perks", { required: true })}
            />
            {errors.perks && errors.perks.type === "required" && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div>
            <label htmlFor="responsibility" className="font-semibold">
              Responsibility
            </label>
            <input
              type="text"
              name="responsibility"
              placeholder="Enter internship responsibility"
              className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
              {...register("responsibility", { required: true })}
            />
            {errors.responsibility &&
              errors.responsibility.type === "required" && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
          </div>
          <div>
            <label htmlFor="assesments" className="font-semibold">
              Assesments
            </label>
            <input
              type="text"
              name="assesments"
              placeholder="Enter assessments"
              className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
              {...register("assesments", { required: true })}
            />
            {errors.assesments && errors.assesments.type === "required" && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div>
            <label htmlFor="description" className="font-semibold">
              Description{" "}
              <span className="text-zinc-400 text-xs font-normal">
                (optional)
              </span>
            </label>
            <textarea
              type="text"
              name="description"
              placeholder="Short description of work done (max 250 char)"
              className="w-full h-[20vh] resize-none px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
              {...register("description", { required: true })}
            ></textarea>
          </div>

          <button className="px-4 py-2 rounded bg-[#00A5EC] hover:bg-[#0d95cf] text-white/90 font-semibold">
            Create Internship
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateInternship;
