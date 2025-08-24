import type { FC } from 'react';
import { useForm } from 'react-hook-form';

interface FormValues {
  firstname: string;
  age: string;
  gender: string;
  country: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RHForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FormValues>();

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
  };

  const watchedValue = watch('password');
  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-100 text-sm font-light p-3 flex flex-col divide-y divide-gray-200 border rounded-lg border-[#5d2611] hover:border-[#cd7479] duration-300"
        >
          <fieldset className="flex flex-col gap-2 pb-4">
            <div>
              <legend>Personal information:</legend>
            </div>
            <label>
              Name:
              <input
                type="text"
                {...register('firstname', {
                  required: '*The field must be filled in.',
                  validate: (value) => {
                    const isUpper =
                      value.charAt(0) === value.charAt(0).toUpperCase();
                    return isUpper || '*First letter must be uppercase';
                  },
                })}
                className="border m-1 p-1 rounded-lg border-[#5d2611] focus:border-[#cd7479] focus:outline-none duration-300"
              />
              <div>
                {errors?.firstname && (
                  <p className="text-xs text-red-500">
                    {errors?.firstname?.message || 'error!'}
                  </p>
                )}
              </div>
            </label>
            <label>
              Age:
              <input
                type="text"
                {...register('age', {
                  required: '*The field must be filled in.',
                  validate: (value) => {
                    const num = Number(value);
                    if (isNaN(num)) {
                      return 'The value should be a number';
                    }
                    if (num <= 0 || num > 99) {
                      return '*Age must be between 1 and 99';
                    }
                  },
                })}
                className="border m-1 p-1 rounded-lg border-[#5d2611] focus:border-[#cd7479] focus:outline-none duration-300"
              />
              <div>
                {errors?.age && (
                  <p className="text-red-500 text-xs">
                    {errors?.age?.message || 'error!'}
                  </p>
                )}
              </div>
            </label>
            <label>
              Gender:
              <div className="flex gap-2">
                <label>
                  male&nbsp;
                  <input
                    type="radio"
                    value="male"
                    {...register('gender', {
                      required: 'Please select a gender',
                    })}
                  />
                </label>
                <label>
                  female&nbsp;
                  <input
                    type="radio"
                    value="female"
                    {...register('gender', {
                      required: 'Please select a gender',
                    })}
                  />
                </label>
                {errors?.gender && (
                  <p className="text-red-500 text-xs">
                    {errors?.gender?.message}
                  </p>
                )}
              </div>
            </label>
            <label htmlFor="country-input">
              Country:
              <input
                id="country-input"
                {...register('country', {
                  required: '*Please select a country ',
                })}
                list="countries-list"
                placeholder="Start typing…"
                className="border m-1 p-1 rounded-lg border-[#5d2611] focus:border-[#cd7479] focus:outline-none duration-300"
              />
              <datalist id="countries-list">
                {/* {countries.map((c) => (
                  <option key={c} value={c} />
                ))} */}
                <option value="Belarus"></option>
                <option value="Russia"></option>
                <option value="USA"></option>
              </datalist>
              {errors?.country && (
                <p className="text-red-500 text-xs">
                  {errors?.country?.message}
                </p>
              )}
            </label>
          </fieldset>
          <fieldset className="flex flex-col gap-2 pb-4 pt-4">
            <div>
              <legend>Account information:</legend>
            </div>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: '*The field must be filled in.',
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: 'invalid email format',
                  },
                })}
                placeholder="example@domain.com"
                className="border m-1 p-1 rounded-lg border-[#5d2611] focus:border-[#cd7479] focus:outline-none duration-300"
              />
              {errors?.email && (
                <p className="text-red-500 text-xs">{errors?.email?.message}</p>
              )}
            </label>

            <label htmlFor="password">
              Password:
              <input
                type="password"
                id="password"
                {...register('password', {
                  required: '*The field must be filled in.',
                  validate: (value) => {
                    if (
                      !/[A-Z]/.test(value) ||
                      !/[a-z]/.test(value) ||
                      !/\d/.test(value) ||
                      !/[!@#$%^&*()]/.test(value)
                    ) {
                      return '*the password should consist of 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character';
                    }
                  },
                })}
                placeholder="Enter the password..."
                className="border m-1 p-1 rounded-lg border-[#5d2611] focus:border-[#cd7479] focus:outline-none duration-300"
              />
              {errors?.password && (
                <p className="text-wrap text-red-500 text-xs">
                  {errors?.password?.message}
                </p>
              )}
            </label>
            <label htmlFor="confirm-password">
              Confirm the password:
              <input
                type="password"
                id="confirm-password"
                {...register('confirmPassword', {
                  required: '*The field must be filled in.',
                  validate: (value) => {
                    if (value !== watchedValue) {
                      return '*passwords don t match';
                    }
                    return true;
                  },
                })}
                placeholder="Repeat the password..."
                className="border m-1 p-1 rounded-lg border-[#5d2611] focus:border-[#cd7479] focus:outline-none duration-300"
              />
              {errors?.confirmPassword && (
                <p className="text-wrap text-red-500 text-xs">
                  {errors?.confirmPassword?.message}
                </p>
              )}
            </label>
            <label className="cursor-pointer">
              <span>Upload an image</span>
              <input
                type="file"
                id="image-upload"
                name="image"
                accept=".jpg,.jpeg,.png"
                hidden
              />
              <p className="font-lato">JPG and PNG are supported.</p>
              <div id="preview"></div>
            </label>
          </fieldset>
          <label className="pt-4">
            <input type="checkbox" id="terms" name="terms" required />
            &nbsp;accept Terms and Conditions agreement
          </label>
          <input
            type="submit"
            value="Submit"
            className="bg-[#7d5a4c] m-1 cursor-pointer hover:bg-[#5c3f34] text-white font-medium py-2 px-5 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          />
        </form>
      </div>
    </>
  );
};

export default RHForm;
