import type { FC } from 'react';

const RHForm: FC = () => {
  return (
    <>
      <div>
        <form>
          <fieldset className="flex flex-col gap-2">
            <div>
              <legend>Personal information:</legend>
            </div>
            <label>
              Name:
              <input type="text" />
            </label>
            <label>
              Age:
              <input type="text" />
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
            <label htmlFor="email">
              Email:
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="example@domain.com"
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
              />
            </label>
            <label>
              <span>Upload an image</span>
              <input
                type="file"
                id="image-upload"
                name="image"
                accept=".jpg,.jpeg,.png"
                hidden
              />
              <p>JPG and PNG are supported.</p>
              <div id="preview"></div>
            </label>
            <label>
              <input type="checkbox" id="terms" name="terms" required />
              &nbsp;accept Terms and Conditions agreement
            </label>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default RHForm;
