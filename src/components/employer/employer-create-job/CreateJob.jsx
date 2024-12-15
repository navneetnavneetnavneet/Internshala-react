import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const CreateJob = () => {
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

  return (
    <div className="w-full py-10">
      <div className="w-1/2 bg-white rounded-lg text-zinc-600 border mx-auto px-10 py-5">
        <h1 className="w-full text-center text-2xl font-bold">Create Job</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full mt-5 flex flex-col gap-5"
        >
          <div>
            <label htmlFor="title" className="font-semibold">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter job title"
              className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
              {...register("title", { required: true })}
            />
            {errors.title && errors.title.type === "required" && (
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
              <label className="font-semibold">Job Type</label>
              <select
                name="jobtype"
                className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
                {...register("jobtype", { required: true })}
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
              <label htmlFor="salary" className="font-semibold">
                Salary
              </label>
              <input
                type="number"
                name="salary"
                placeholder="Enter salary"
                className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
                {...register("salary", { required: true })}
              />
              {errors.salary && errors.salary.type === "required" && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="w-[48%]">
              <label htmlFor="perk" className="font-semibold">
                Perk
              </label>
              <input
                type="text"
                name="perks"
                placeholder="Enter job perks"
                className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
                {...register("perks", { required: true })}
              />
              {errors.perks && errors.perks.type === "required" && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="preferences" className="font-semibold">
              Preferences
            </label>
            <input
              type="text"
              name="preferences"
              placeholder="Enter job preferences"
              className="w-full px-4 py-2  mt-1 outline-1 outline-sky-200 border rounded"
              {...register("preferences", { required: true })}
            />
            {errors.preferences && errors.preferences.type === "required" && (
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
            Create Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
