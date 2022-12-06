const baseUrl = "https://itunes.apple.com/search?";

/**
 *
 * @param {String} term
 * The search term to send to the API
 * @example createSearchQuery({term: 'test query'})
 *
 * @param {String} country
 * The country code to send to the API
 * @example createSearchQuery({country: 'ca'})
 *
 * @param {String} entity
 * The type of results you want returned, relative to the specified media type. For example: movieArtist for a movie media type search. The default is the track entity associated with the specified media type.
 * For a list of available entitites, see Table 2-1.
 * https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1
 * @example createSearchQuery({entity: 'test query'})
 *
 * @param {String} media
 * The media type to send to the API
 * @values movie, podcast, music, musicVideo, audiobook, shortFilm, tvShow, software, ebook, all
 * @example createSearchQuery({media: 'movie'})
 *
 * @param {String} limit
 * The limit of the results to return.
 * @example createSearchQuery({limit: '10'})
 *
 * @param {String} lang
 * The language of the search result.
 * @values 	en_us, ja_jp
 * @example createSearchQuery({lang: 'en_us'})
 */

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
  custom = "",
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
  return `${termQuery}${countryQuery}${mediaQuery}${languageQuery}${versionQuery}${explicitQuery}${entityQuery}${attributesQuery}${callbackQuery}${limitQuery}&${custom}`;
};
export const getData = (queries) => {
  try {
    return fetch(`${baseUrl}${queries}`)
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
