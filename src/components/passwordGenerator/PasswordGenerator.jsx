import { useCallback, useEffect, useRef, useState } from "react";
import { Switch } from "@headlessui/react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const PasswordGenerator = () => {
  const passwordRef = useRef(null);
  const [agreedNum, setAgreedNum] = useState(false);
  const [agreedChar, setAgreedChar] = useState(false);
  const [isLength, setIsLength] = useState(8);
  const [password, setPassword] = useState("");

  //handle Password Generator
  const handlePasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (agreedNum) str += "0123456789";
    if (agreedChar) str += "!@#$%^&*()-_+=[]{}~`";
    for (let i = 1; i <= isLength; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLength, agreedNum, agreedChar, setPassword]);

  //handle Copy Password to clip board
  const handleCopyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    handlePasswordGenerator();
  }, [isLength, agreedNum, agreedChar, handlePasswordGenerator]);

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-14 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[3.5rem] bottom-0"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Password Generator
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Generate robust passwords for enhanced online security.
        </p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Create Password
            </label>
            <div className="mt-2.5">
              <input
                readOnly
                type="text"
                value={password}
                ref={passwordRef}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreedNum}
                onChange={setAgreedNum}
                className={classNames(
                  agreedNum ? "bg-indigo-600" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreedNum ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              <a href="#" className="font-semibold text-indigo-600">
                Include Numbers
              </a>
            </Switch.Label>
          </Switch.Group>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreedChar}
                onChange={setAgreedChar}
                className={classNames(
                  agreedChar ? "bg-indigo-600" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreedChar ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              <a href="#" className="font-semibold text-indigo-600">
                Include Special Characters
              </a>
            </Switch.Label>
          </Switch.Group>
          <Box sx={{ width: 300 }}>
            <span className="font-semibold text-indigo-600">
              length {isLength}
            </span>
            <Slider
              min={4}
              max={100}
              value={isLength}
              onChange={(e) => setIsLength(Number(e.target.value))}
              defaultValue={50}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </Box>
        </div>
      </form>
      <div className="mt-5 mx-auto max-w-xl sm:mt-5">
        <button
          onClick={handleCopyPassword}
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Copy Password
        </button>
      </div>
    </div>
  );
};
export default PasswordGenerator;
