
function capFirstLetter(input: string): string
{
  if (input.length === 0)
  {
    return input;
  }
  return input.charAt(0).toUpperCase() + input.slice(1);
}

function isRunningStandalone()
{
  return (window.matchMedia('(display-mode: standalone)').matches);
}

function internalCanGoBack()
{
  const defaultPage = "/";
  const currentPage = window.location.pathname;
  return currentPage !== defaultPage;
}

function getFirstLetter(value: string)
{
  return value.charAt(0).toUpperCase();
}

function getDepartureCode(name: string)
{
  const first = name.split("-")[0]?.charAt(0).toUpperCase();
  const second = name.split("-")[1]?.charAt(0).toUpperCase();
  console.log(`${first}${second}`);
  return `${first}${second}`
}

export const helper = {
  capFirstLetter,
  isRunningStandalone,
  getFirstLetter,
  internalCanGoBack,
  getDepartureCode,
} 
