import type { FC } from 'react';

const RHForm: FC = () => {
  return (
    <>
      <div>
        <form className="text-sm font-light p-3 flex flex-col divide-y divide-gray-100 border rounded-lg border-[#5d2611] hover:border-[#cd7479] duration-300">
          <fieldset className="flex flex-col gap-2 pb-4">
            <div>
              <legend>Personal information:</legend>
            </div>
            <label>
              Name:
              <input
                type="text"
                className="border m-1 p-1 rounded-lg border-[#5d2611] focus:border-[#cd7479] focus:outline-none duration-300"
              />
            </label>
            <label>
              Age:
              <input
                type="text"
                className="border m-1 p-1 rounded-lg border-[#5d2611] focus:border-[#cd7479] focus:outline-none duration-300"
              />
            </label>
            <label>
              Gender:
              <div className="flex gap-2">
                <label>
                  male&nbsp;
                  <input type="radio" name="gender" value="male" required />
                </label>
                <label>
                  female&nbsp;
                  <input type="radio" name="gender" value="female" />
                </label>
              </div>
            </label>
            <label htmlFor="country-input">
              Country:
              <input
                id="country-input"
                name="country"
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
                name="email"
                required
                placeholder="example@domain.com"
                className="border m-1 p-1 rounded-lg border-[#5d2611] focus:border-[#cd7479] focus:outline-none duration-300"
              />
            </label>

            <label htmlFor="password">
              Password:
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Enter the password..."
                className="border m-1 p-1 rounded-lg border-[#5d2611] focus:border-[#cd7479] focus:outline-none duration-300"
              />
            </label>
            <label htmlFor="confirm-password">
              Password:
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                required
                placeholder="Repeat the password..."
                className="border m-1 p-1 rounded-lg border-[#5d2611] focus:border-[#cd7479] focus:outline-none duration-300"
              />
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
