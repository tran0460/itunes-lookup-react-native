const baseUrl = "https://itunes.apple.com/search?";
export const createSearchQuery = ({
  term = "",
  country = "",
  media = "",
  entity = "",
  attribute = "",
  callback = "",
  limit = "",
  lang = "",
  version = "",
  explicit = "",
}) => {
  const termQuery = term ? `term=${term.replace(" ", "+")}` : "";
  const countryQuery = country ? `&country=${country}` : "";
  const mediaQuery = media ? `&media=${media}` : "";
  const entityQuery = entity ? `&entity=${entity}` : "";
  const attributesQuery = attribute ? `&attributes=${attribute}` : "";
  const callbackQuery = callback ? `&callBack=${callback}` : "";
  const limitQuery = limit ? `&limit=${limit}` : "";
  const languageQuery = lang ? `&language=${lang}` : "";
  const versionQuery = version ? `&version=${version}` : "";
  const explicitQuery = explicit ? `&explicit=${explicit}` : "";
  return `${termQuery}${countryQuery}${mediaQuery}${languageQuery}${versionQuery}${explicitQuery}${entityQuery}${attributesQuery}${callbackQuery}${limitQuery}`;
};
export const getData = (queries) => {
  try {
    fetch(`${baseUrl}${queries}`)
      .then((resp) => {
        if (resp.ok) return resp.json();
      })
      .then((data) => {
        return data.results;
      });
  } catch (err) {
    console.log(err);
  }
};
