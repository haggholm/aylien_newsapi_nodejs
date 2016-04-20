# AylienNewsApi.DefaultApi

All URIs are relative to *https://api.newsapi.aylien.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAutocompletes**](DefaultApi.md#listAutocompletes) | **GET** /autocompletes | List autocompletes
[**listCoverages**](DefaultApi.md#listCoverages) | **POST** /coverages | List coverages
[**listHistograms**](DefaultApi.md#listHistograms) | **GET** /histograms | List histograms
[**listRelatedStories**](DefaultApi.md#listRelatedStories) | **POST** /related_stories | List related stories
[**listStories**](DefaultApi.md#listStories) | **GET** /stories | List Stories
[**listTimeSeries**](DefaultApi.md#listTimeSeries) | **GET** /time_series | List time series
[**listTrends**](DefaultApi.md#listTrends) | **GET** /trends | List trends


<a name="listAutocompletes"></a>
# **listAutocompletes**
> Autocompletes listAutocompletes(type, term, opts)

List autocompletes

This endpoint is used for getting list of autocompletes by providing a specific term and type.

### Example
```javascript
var AylienNewsApi = require('aylien-news-api');

var apiInstance = new AylienNewsApi.DefaultApi();

// Configure API key authorization: app_id
var app_id = apiInstance.apiClient.authentications['app_id'];
app_id.apiKey = "YOUR APP ID";

// Configure API key authorization: app_key
var app_key = apiInstance.apiClient.authentications['app_key'];
app_key.apiKey = "YOUR APP KEY";

var type = "type_example"; // {String} This parameter is used for defining the type of autocompletes.

var term = "term_example"; // {String} This parameter is used for finding autocomplete objects whose contains the specified value.

var opts = { 
  'language': "en", // {String} This parameter is used for autocompletes whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'perPage': 3 // {Integer} This parameter is used for specifying number of the items in each page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAutocompletes(type, term, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| This parameter is used for defining the type of autocompletes. | 
 **term** | **String**| This parameter is used for finding autocomplete objects whose contains the specified value. | 
 **language** | **String**| This parameter is used for autocompletes whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional] [default to en]
 **perPage** | **Integer**| This parameter is used for specifying number of the items in each page. | [optional] [default to 3]

### Return type

[**Autocompletes**](Autocompletes.md)

### Authorization

[app_key](../README.md#app_key), [app_id](../README.md#app_id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, text/xml

<a name="listCoverages"></a>
# **listCoverages**
> Coverages listCoverages(opts)

List coverages

This endpoint is used for finding story coverages based on provided parameters. The number of coverages to return, up to a maximum of 100.

### Example
```javascript
var AylienNewsApi = require('aylien-news-api');

var apiInstance = new AylienNewsApi.DefaultApi();

// Configure API key authorization: app_id
var app_id = apiInstance.apiClient.authentications['app_id'];
app_id.apiKey = "YOUR APP ID";

// Configure API key authorization: app_key
var app_key = apiInstance.apiClient.authentications['app_key'];
app_key.apiKey = "YOUR APP KEY";

var opts = { 
  'id': [56], // {[Integer]} This parameter is used for finding stroies by story id.
  'title': "title_example", // {String} This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'body': "body_example", // {String} This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'text': "text_example", // {String} This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'language': ["language_example"], // {[String]} This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'publishedAtStart': "publishedAtStart_example", // {String} This parameter is used for finding stories whose published at is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'publishedAtEnd': "publishedAtEnd_example", // {String} This parameter is used for finding stories whose published at is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'categoriesTaxonomy': "categoriesTaxonomy_example", // {String} This parameter is used for defining type of the taxonomy for the rest of categories queries.
  'categoriesConfident': true, // {Boolean} This parameter is used for finding stories whose categories are confident.
  'categoriesId': ["categoriesId_example"], // {[String]} This parameter is used for finding stories whose categories id is the specified value.
  'categoriesLevel': [56], // {[Integer]} This parameter is used for finding stories whose categories level is the specified value.
  'entitiesTitleText': ["entitiesTitleText_example"], // {[String]} This parameter is used for finding stories whose entities text in title is the specified value.
  'entitiesTitleType': ["entitiesTitleType_example"], // {[String]} This parameter is used for finding stories whose entities type in title is the specified value.
  'entitiesTitleLinksDbpedia': ["entitiesTitleLinksDbpedia_example"], // {[String]} This parameter is used for finding stories whose entities dbpedia url in title is the specified value.
  'entitiesBodyText': ["entitiesBodyText_example"], // {[String]} This parameter is used for finding stories whose entities text in body is the specified value.
  'entitiesBodyType': ["entitiesBodyType_example"], // {[String]} This parameter is used for finding stories whose entities type in body is the specified value.
  'entitiesBodyLinksDbpedia': ["entitiesBodyLinksDbpedia_example"], // {[String]} This parameter is used for finding stories whose entities dbpedia url in body is the specified value.
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // {String} This parameter is used for finding stories whose title sentiment is the specified value.
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // {String} This parameter is used for finding stories whose body sentiment is the specified value.
  'authorId': [56], // {[Integer]} This parameter is used for finding stories whose author id is the specified value.
  'authorName': "authorName_example", // {String} This parameter is used for finding stories whose author full name contains the specified value.
  'sourceId': [56], // {[Integer]} This parameter is used for finding stories whose source id is the specified value.
  'sourceName': ["sourceName_example"], // {[String]} This parameter is used for finding stories whose source name contains the specified value.
  'sourceDomain': ["sourceDomain_example"], // {[String]} This parameter is used for finding stories whose source domain is the specified value.
  'sourceLocationsCountry': ["sourceLocationsCountry_example"], // {[String]} This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes.
  'sourceLocationsState': ["sourceLocationsState_example"], // {[String]} This parameter is used for finding stories whose source state/province is the specified value.
  'sourceLocationsCity': ["sourceLocationsCity_example"], // {[String]} This parameter is used for finding stories whose source city is the specified value.
  'sourceScopesCountry': ["sourceScopesCountry_example"], // {[String]} This parameter is used for finding stories whose source scopes country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes.
  'sourceScopesState': ["sourceScopesState_example"], // {[String]} This parameter is used for finding stories whose source scopes state/province is the specified value.
  'sourceScopesCity': ["sourceScopesCity_example"], // {[String]} This parameter is used for finding stories whose source scopes city is the specified value.
  'sourceScopesLevel': ["sourceScopesLevel_example"], // {[String]} This parameter is used for finding stories whose source scopes level is the specified value.
  'storyId': 789, // {Integer} A story id
  'storyUrl': "storyUrl_example", // {String} An article or webpage
  'storyTitle': "storyTitle_example", // {String} Title of the article
  'storyBody': "storyBody_example", // {String} Body of the article
  'storyPublishedAt': new Date("2013-10-20T19:20:30+01:00"), // {Date} Publish date of the article. If you use url or title and body for getting coverages, this parameter is required. The format used is a restricted form of the canonical representation of dateTime in the [XML Schema specification (ISO 8601)](https://www.w3.org/TR/xmlschema-2/#dateTime).
  'storyLanguage': "auto", // {String} This parameter is used for setting language of the story. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'perPage': 3 // {Integer} This parameter is used for specifying number of the items in each page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listCoverages(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**[Integer]**](Integer.md)| This parameter is used for finding stroies by story id. | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **language** | [**[String]**](String.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional] 
 **publishedAtStart** | **String**| This parameter is used for finding stories whose published at is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **publishedAtEnd** | **String**| This parameter is used for finding stories whose published at is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **categoriesTaxonomy** | **String**| This parameter is used for defining type of the taxonomy for the rest of categories queries. | [optional] 
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. | [optional] [default to true]
 **categoriesId** | [**[String]**](String.md)| This parameter is used for finding stories whose categories id is the specified value. | [optional] 
 **categoriesLevel** | [**[Integer]**](Integer.md)| This parameter is used for finding stories whose categories level is the specified value. | [optional] 
 **entitiesTitleText** | [**[String]**](String.md)| This parameter is used for finding stories whose entities text in title is the specified value. | [optional] 
 **entitiesTitleType** | [**[String]**](String.md)| This parameter is used for finding stories whose entities type in title is the specified value. | [optional] 
 **entitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used for finding stories whose entities dbpedia url in title is the specified value. | [optional] 
 **entitiesBodyText** | [**[String]**](String.md)| This parameter is used for finding stories whose entities text in body is the specified value. | [optional] 
 **entitiesBodyType** | [**[String]**](String.md)| This parameter is used for finding stories whose entities type in body is the specified value. | [optional] 
 **entitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used for finding stories whose entities dbpedia url in body is the specified value. | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value. | [optional] 
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value. | [optional] 
 **authorId** | [**[Integer]**](Integer.md)| This parameter is used for finding stories whose author id is the specified value. | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value. | [optional] 
 **sourceId** | [**[Integer]**](Integer.md)| This parameter is used for finding stories whose source id is the specified value. | [optional] 
 **sourceName** | [**[String]**](String.md)| This parameter is used for finding stories whose source name contains the specified value. | [optional] 
 **sourceDomain** | [**[String]**](String.md)| This parameter is used for finding stories whose source domain is the specified value. | [optional] 
 **sourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. | [optional] 
 **sourceLocationsState** | [**[String]**](String.md)| This parameter is used for finding stories whose source state/province is the specified value. | [optional] 
 **sourceLocationsCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source city is the specified value. | [optional] 
 **sourceScopesCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. | [optional] 
 **sourceScopesState** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes state/province is the specified value. | [optional] 
 **sourceScopesCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes city is the specified value. | [optional] 
 **sourceScopesLevel** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes level is the specified value. | [optional] 
 **storyId** | **Integer**| A story id | [optional] 
 **storyUrl** | **String**| An article or webpage | [optional] 
 **storyTitle** | **String**| Title of the article | [optional] 
 **storyBody** | **String**| Body of the article | [optional] 
 **storyPublishedAt** | **Date**| Publish date of the article. If you use url or title and body for getting coverages, this parameter is required. The format used is a restricted form of the canonical representation of dateTime in the [XML Schema specification (ISO 8601)](https://www.w3.org/TR/xmlschema-2/#dateTime). | [optional] 
 **storyLanguage** | **String**| This parameter is used for setting language of the story. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional] [default to auto]
 **perPage** | **Integer**| This parameter is used for specifying number of the items in each page. | [optional] [default to 3]

### Return type

[**Coverages**](Coverages.md)

### Authorization

[app_key](../README.md#app_key), [app_id](../README.md#app_id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, text/xml

<a name="listHistograms"></a>
# **listHistograms**
> Histograms listHistograms(opts)

List histograms

This endpoint is used for getting histograms based on the field parameter is passed.

### Example
```javascript
var AylienNewsApi = require('aylien-news-api');

var apiInstance = new AylienNewsApi.DefaultApi();

// Configure API key authorization: app_id
var app_id = apiInstance.apiClient.authentications['app_id'];
app_id.apiKey = "YOUR APP ID";

// Configure API key authorization: app_key
var app_key = apiInstance.apiClient.authentications['app_key'];
app_key.apiKey = "YOUR APP KEY";

var opts = { 
  'id': [56], // {[Integer]} This parameter is used for finding stroies by story id.
  'title': "title_example", // {String} This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'body': "body_example", // {String} This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'text': "text_example", // {String} This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'language': ["language_example"], // {[String]} This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'publishedAtStart': "publishedAtStart_example", // {String} This parameter is used for finding stories whose published at is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'publishedAtEnd': "publishedAtEnd_example", // {String} This parameter is used for finding stories whose published at is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'categoriesTaxonomy': "categoriesTaxonomy_example", // {String} This parameter is used for defining type of the taxonomy for the rest of categories queries.
  'categoriesConfident': true, // {Boolean} This parameter is used for finding stories whose categories are confident.
  'categoriesId': ["categoriesId_example"], // {[String]} This parameter is used for finding stories whose categories id is the specified value.
  'categoriesLevel': [56], // {[Integer]} This parameter is used for finding stories whose categories level is the specified value.
  'entitiesTitleText': ["entitiesTitleText_example"], // {[String]} This parameter is used for finding stories whose entities text in title is the specified value.
  'entitiesTitleType': ["entitiesTitleType_example"], // {[String]} This parameter is used for finding stories whose entities type in title is the specified value.
  'entitiesTitleLinksDbpedia': ["entitiesTitleLinksDbpedia_example"], // {[String]} This parameter is used for finding stories whose entities dbpedia url in title is the specified value.
  'entitiesBodyText': ["entitiesBodyText_example"], // {[String]} This parameter is used for finding stories whose entities text in body is the specified value.
  'entitiesBodyType': ["entitiesBodyType_example"], // {[String]} This parameter is used for finding stories whose entities type in body is the specified value.
  'entitiesBodyLinksDbpedia': ["entitiesBodyLinksDbpedia_example"], // {[String]} This parameter is used for finding stories whose entities dbpedia url in body is the specified value.
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // {String} This parameter is used for finding stories whose title sentiment is the specified value.
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // {String} This parameter is used for finding stories whose body sentiment is the specified value.
  'authorId': [56], // {[Integer]} This parameter is used for finding stories whose author id is the specified value.
  'authorName': "authorName_example", // {String} This parameter is used for finding stories whose author full name contains the specified value.
  'sourceId': [56], // {[Integer]} This parameter is used for finding stories whose source id is the specified value.
  'sourceName': ["sourceName_example"], // {[String]} This parameter is used for finding stories whose source name contains the specified value.
  'sourceDomain': ["sourceDomain_example"], // {[String]} This parameter is used for finding stories whose source domain is the specified value.
  'sourceLocationsCountry': ["sourceLocationsCountry_example"], // {[String]} This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes.
  'sourceLocationsState': ["sourceLocationsState_example"], // {[String]} This parameter is used for finding stories whose source state/province is the specified value.
  'sourceLocationsCity': ["sourceLocationsCity_example"], // {[String]} This parameter is used for finding stories whose source city is the specified value.
  'sourceScopesCountry': ["sourceScopesCountry_example"], // {[String]} This parameter is used for finding stories whose source scopes country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes.
  'sourceScopesState': ["sourceScopesState_example"], // {[String]} This parameter is used for finding stories whose source scopes state/province is the specified value.
  'sourceScopesCity': ["sourceScopesCity_example"], // {[String]} This parameter is used for finding stories whose source scopes city is the specified value.
  'sourceScopesLevel': ["sourceScopesLevel_example"], // {[String]} This parameter is used for finding stories whose source scopes level is the specified value.
  'intervalStart': 56, // {Integer} This parameter is used for setting the start data point of histogram intervals.
  'intervalEnd': 56, // {Integer} This parameter is used for setting the end data point of histogram intervals.
  'intervalWidth': 56, // {Integer} This parameter is used for setting the width of histogram intervals.
  'field': "social_shares_count" // {String} This parameter is used for specifying the y-axis variable for the histogram.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listHistograms(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**[Integer]**](Integer.md)| This parameter is used for finding stroies by story id. | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **language** | [**[String]**](String.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional] 
 **publishedAtStart** | **String**| This parameter is used for finding stories whose published at is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **publishedAtEnd** | **String**| This parameter is used for finding stories whose published at is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **categoriesTaxonomy** | **String**| This parameter is used for defining type of the taxonomy for the rest of categories queries. | [optional] 
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. | [optional] [default to true]
 **categoriesId** | [**[String]**](String.md)| This parameter is used for finding stories whose categories id is the specified value. | [optional] 
 **categoriesLevel** | [**[Integer]**](Integer.md)| This parameter is used for finding stories whose categories level is the specified value. | [optional] 
 **entitiesTitleText** | [**[String]**](String.md)| This parameter is used for finding stories whose entities text in title is the specified value. | [optional] 
 **entitiesTitleType** | [**[String]**](String.md)| This parameter is used for finding stories whose entities type in title is the specified value. | [optional] 
 **entitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used for finding stories whose entities dbpedia url in title is the specified value. | [optional] 
 **entitiesBodyText** | [**[String]**](String.md)| This parameter is used for finding stories whose entities text in body is the specified value. | [optional] 
 **entitiesBodyType** | [**[String]**](String.md)| This parameter is used for finding stories whose entities type in body is the specified value. | [optional] 
 **entitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used for finding stories whose entities dbpedia url in body is the specified value. | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value. | [optional] 
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value. | [optional] 
 **authorId** | [**[Integer]**](Integer.md)| This parameter is used for finding stories whose author id is the specified value. | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value. | [optional] 
 **sourceId** | [**[Integer]**](Integer.md)| This parameter is used for finding stories whose source id is the specified value. | [optional] 
 **sourceName** | [**[String]**](String.md)| This parameter is used for finding stories whose source name contains the specified value. | [optional] 
 **sourceDomain** | [**[String]**](String.md)| This parameter is used for finding stories whose source domain is the specified value. | [optional] 
 **sourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. | [optional] 
 **sourceLocationsState** | [**[String]**](String.md)| This parameter is used for finding stories whose source state/province is the specified value. | [optional] 
 **sourceLocationsCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source city is the specified value. | [optional] 
 **sourceScopesCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. | [optional] 
 **sourceScopesState** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes state/province is the specified value. | [optional] 
 **sourceScopesCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes city is the specified value. | [optional] 
 **sourceScopesLevel** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes level is the specified value. | [optional] 
 **intervalStart** | **Integer**| This parameter is used for setting the start data point of histogram intervals. | [optional] 
 **intervalEnd** | **Integer**| This parameter is used for setting the end data point of histogram intervals. | [optional] 
 **intervalWidth** | **Integer**| This parameter is used for setting the width of histogram intervals. | [optional] 
 **field** | **String**| This parameter is used for specifying the y-axis variable for the histogram. | [optional] [default to social_shares_count]

### Return type

[**Histograms**](Histograms.md)

### Authorization

[app_key](../README.md#app_key), [app_id](../README.md#app_id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, text/xml

<a name="listRelatedStories"></a>
# **listRelatedStories**
> RelatedStories listRelatedStories(opts)

List related stories

This endpoint is used for finding related stories based on provided parameters. The number of related stories to return, up to a maximum of 100.

### Example
```javascript
var AylienNewsApi = require('aylien-news-api');

var apiInstance = new AylienNewsApi.DefaultApi();

// Configure API key authorization: app_id
var app_id = apiInstance.apiClient.authentications['app_id'];
app_id.apiKey = "YOUR APP ID";

// Configure API key authorization: app_key
var app_key = apiInstance.apiClient.authentications['app_key'];
app_key.apiKey = "YOUR APP KEY";

var opts = { 
  'id': [56], // {[Integer]} This parameter is used for finding stroies by story id.
  'title': "title_example", // {String} This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'body': "body_example", // {String} This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'text': "text_example", // {String} This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'language': ["language_example"], // {[String]} This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'publishedAtStart': "publishedAtStart_example", // {String} This parameter is used for finding stories whose published at is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'publishedAtEnd': "publishedAtEnd_example", // {String} This parameter is used for finding stories whose published at is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'categoriesTaxonomy': "categoriesTaxonomy_example", // {String} This parameter is used for defining type of the taxonomy for the rest of categories queries.
  'categoriesConfident': true, // {Boolean} This parameter is used for finding stories whose categories are confident.
  'categoriesId': ["categoriesId_example"], // {[String]} This parameter is used for finding stories whose categories id is the specified value.
  'categoriesLevel': [56], // {[Integer]} This parameter is used for finding stories whose categories level is the specified value.
  'entitiesTitleText': ["entitiesTitleText_example"], // {[String]} This parameter is used for finding stories whose entities text in title is the specified value.
  'entitiesTitleType': ["entitiesTitleType_example"], // {[String]} This parameter is used for finding stories whose entities type in title is the specified value.
  'entitiesTitleLinksDbpedia': ["entitiesTitleLinksDbpedia_example"], // {[String]} This parameter is used for finding stories whose entities dbpedia url in title is the specified value.
  'entitiesBodyText': ["entitiesBodyText_example"], // {[String]} This parameter is used for finding stories whose entities text in body is the specified value.
  'entitiesBodyType': ["entitiesBodyType_example"], // {[String]} This parameter is used for finding stories whose entities type in body is the specified value.
  'entitiesBodyLinksDbpedia': ["entitiesBodyLinksDbpedia_example"], // {[String]} This parameter is used for finding stories whose entities dbpedia url in body is the specified value.
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // {String} This parameter is used for finding stories whose title sentiment is the specified value.
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // {String} This parameter is used for finding stories whose body sentiment is the specified value.
  'authorId': [56], // {[Integer]} This parameter is used for finding stories whose author id is the specified value.
  'authorName': "authorName_example", // {String} This parameter is used for finding stories whose author full name contains the specified value.
  'sourceId': [56], // {[Integer]} This parameter is used for finding stories whose source id is the specified value.
  'sourceName': ["sourceName_example"], // {[String]} This parameter is used for finding stories whose source name contains the specified value.
  'sourceDomain': ["sourceDomain_example"], // {[String]} This parameter is used for finding stories whose source domain is the specified value.
  'sourceLocationsCountry': ["sourceLocationsCountry_example"], // {[String]} This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes.
  'sourceLocationsState': ["sourceLocationsState_example"], // {[String]} This parameter is used for finding stories whose source state/province is the specified value.
  'sourceLocationsCity': ["sourceLocationsCity_example"], // {[String]} This parameter is used for finding stories whose source city is the specified value.
  'sourceScopesCountry': ["sourceScopesCountry_example"], // {[String]} This parameter is used for finding stories whose source scopes country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes.
  'sourceScopesState': ["sourceScopesState_example"], // {[String]} This parameter is used for finding stories whose source scopes state/province is the specified value.
  'sourceScopesCity': ["sourceScopesCity_example"], // {[String]} This parameter is used for finding stories whose source scopes city is the specified value.
  'sourceScopesLevel': ["sourceScopesLevel_example"], // {[String]} This parameter is used for finding stories whose source scopes level is the specified value.
  'storyId': 789, // {Integer} A story id
  'storyUrl': "storyUrl_example", // {String} An article or webpage
  'storyTitle': "storyTitle_example", // {String} Title of the article
  'storyBody': "storyBody_example", // {String} Body of the article
  'boostBy': "boostBy_example", // {String} This parameter is used for boosting result by the specified value.
  'storyLanguage': "auto", // {String} This parameter is used for setting language of the story. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'perPage': 3 // {Integer} This parameter is used for specifying number of the items in each page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listRelatedStories(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**[Integer]**](Integer.md)| This parameter is used for finding stroies by story id. | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **language** | [**[String]**](String.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional] 
 **publishedAtStart** | **String**| This parameter is used for finding stories whose published at is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **publishedAtEnd** | **String**| This parameter is used for finding stories whose published at is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **categoriesTaxonomy** | **String**| This parameter is used for defining type of the taxonomy for the rest of categories queries. | [optional] 
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. | [optional] [default to true]
 **categoriesId** | [**[String]**](String.md)| This parameter is used for finding stories whose categories id is the specified value. | [optional] 
 **categoriesLevel** | [**[Integer]**](Integer.md)| This parameter is used for finding stories whose categories level is the specified value. | [optional] 
 **entitiesTitleText** | [**[String]**](String.md)| This parameter is used for finding stories whose entities text in title is the specified value. | [optional] 
 **entitiesTitleType** | [**[String]**](String.md)| This parameter is used for finding stories whose entities type in title is the specified value. | [optional] 
 **entitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used for finding stories whose entities dbpedia url in title is the specified value. | [optional] 
 **entitiesBodyText** | [**[String]**](String.md)| This parameter is used for finding stories whose entities text in body is the specified value. | [optional] 
 **entitiesBodyType** | [**[String]**](String.md)| This parameter is used for finding stories whose entities type in body is the specified value. | [optional] 
 **entitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used for finding stories whose entities dbpedia url in body is the specified value. | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value. | [optional] 
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value. | [optional] 
 **authorId** | [**[Integer]**](Integer.md)| This parameter is used for finding stories whose author id is the specified value. | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value. | [optional] 
 **sourceId** | [**[Integer]**](Integer.md)| This parameter is used for finding stories whose source id is the specified value. | [optional] 
 **sourceName** | [**[String]**](String.md)| This parameter is used for finding stories whose source name contains the specified value. | [optional] 
 **sourceDomain** | [**[String]**](String.md)| This parameter is used for finding stories whose source domain is the specified value. | [optional] 
 **sourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. | [optional] 
 **sourceLocationsState** | [**[String]**](String.md)| This parameter is used for finding stories whose source state/province is the specified value. | [optional] 
 **sourceLocationsCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source city is the specified value. | [optional] 
 **sourceScopesCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. | [optional] 
 **sourceScopesState** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes state/province is the specified value. | [optional] 
 **sourceScopesCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes city is the specified value. | [optional] 
 **sourceScopesLevel** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes level is the specified value. | [optional] 
 **storyId** | **Integer**| A story id | [optional] 
 **storyUrl** | **String**| An article or webpage | [optional] 
 **storyTitle** | **String**| Title of the article | [optional] 
 **storyBody** | **String**| Body of the article | [optional] 
 **boostBy** | **String**| This parameter is used for boosting result by the specified value. | [optional] 
 **storyLanguage** | **String**| This parameter is used for setting language of the story. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional] [default to auto]
 **perPage** | **Integer**| This parameter is used for specifying number of the items in each page. | [optional] [default to 3]

### Return type

[**RelatedStories**](RelatedStories.md)

### Authorization

[app_key](../README.md#app_key), [app_id](../README.md#app_id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, text/xml

<a name="listStories"></a>
# **listStories**
> Stories listStories(opts)

List Stories

This endpoint is used for getting list of stories.

### Example
```javascript
var AylienNewsApi = require('aylien-news-api');

var apiInstance = new AylienNewsApi.DefaultApi();

// Configure API key authorization: app_id
var app_id = apiInstance.apiClient.authentications['app_id'];
app_id.apiKey = "YOUR APP ID";

// Configure API key authorization: app_key
var app_key = apiInstance.apiClient.authentications['app_key'];
app_key.apiKey = "YOUR APP KEY";

var opts = { 
  'id': [56], // {[Integer]} This parameter is used for finding stroies by story id.
  'title': "title_example", // {String} This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'body': "body_example", // {String} This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'text': "text_example", // {String} This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'language': ["language_example"], // {[String]} This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'publishedAtStart': "publishedAtStart_example", // {String} This parameter is used for finding stories whose published at is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'publishedAtEnd': "publishedAtEnd_example", // {String} This parameter is used for finding stories whose published at is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'categoriesTaxonomy': "categoriesTaxonomy_example", // {String} This parameter is used for defining type of the taxonomy for the rest of categories queries.
  'categoriesConfident': true, // {Boolean} This parameter is used for finding stories whose categories are confident.
  'categoriesId': ["categoriesId_example"], // {[String]} This parameter is used for finding stories whose categories id is the specified value.
  'categoriesLevel': [56], // {[Integer]} This parameter is used for finding stories whose categories level is the specified value.
  'entitiesTitleText': ["entitiesTitleText_example"], // {[String]} This parameter is used for finding stories whose entities text in title is the specified value.
  'entitiesTitleType': ["entitiesTitleType_example"], // {[String]} This parameter is used for finding stories whose entities type in title is the specified value.
  'entitiesTitleLinksDbpedia': ["entitiesTitleLinksDbpedia_example"], // {[String]} This parameter is used for finding stories whose entities dbpedia url in title is the specified value.
  'entitiesBodyText': ["entitiesBodyText_example"], // {[String]} This parameter is used for finding stories whose entities text in body is the specified value.
  'entitiesBodyType': ["entitiesBodyType_example"], // {[String]} This parameter is used for finding stories whose entities type in body is the specified value.
  'entitiesBodyLinksDbpedia': ["entitiesBodyLinksDbpedia_example"], // {[String]} This parameter is used for finding stories whose entities dbpedia url in body is the specified value.
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // {String} This parameter is used for finding stories whose title sentiment is the specified value.
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // {String} This parameter is used for finding stories whose body sentiment is the specified value.
  'authorId': [56], // {[Integer]} This parameter is used for finding stories whose author id is the specified value.
  'authorName': "authorName_example", // {String} This parameter is used for finding stories whose author full name contains the specified value.
  'sourceId': [56], // {[Integer]} This parameter is used for finding stories whose source id is the specified value.
  'sourceName': ["sourceName_example"], // {[String]} This parameter is used for finding stories whose source name contains the specified value.
  'sourceDomain': ["sourceDomain_example"], // {[String]} This parameter is used for finding stories whose source domain is the specified value.
  'sourceLocationsCountry': ["sourceLocationsCountry_example"], // {[String]} This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes.
  'sourceLocationsState': ["sourceLocationsState_example"], // {[String]} This parameter is used for finding stories whose source state/province is the specified value.
  'sourceLocationsCity': ["sourceLocationsCity_example"], // {[String]} This parameter is used for finding stories whose source city is the specified value.
  'sourceScopesCountry': ["sourceScopesCountry_example"], // {[String]} This parameter is used for finding stories whose source scopes country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes.
  'sourceScopesState': ["sourceScopesState_example"], // {[String]} This parameter is used for finding stories whose source scopes state/province is the specified value.
  'sourceScopesCity': ["sourceScopesCity_example"], // {[String]} This parameter is used for finding stories whose source scopes city is the specified value.
  'sourceScopesLevel': ["sourceScopesLevel_example"], // {[String]} This parameter is used for finding stories whose source scopes level is the specified value.
  'cluster': false, // {Boolean} This parameter enables clustering for the returned stories.
  'clusterAlgorithm': "lingo", // {String} This parameter is used for specifying the clustering algorithm. It supprts STC, Lingo and [k-means](https://en.wikipedia.org/wiki/K-means_clustering) algorithms.
  '_return': ["_return_example"], // {[String]} This parameter is used for specifying return fields.
  'sortBy': "published_at", // {String} This parameter is used for changing the order column of the result.
  'sortDirection': "desc", // {String} This parameter is used for changing the order direction of the result.
  'cursor': "*", // {String} This parameter is used for finding a specific page.
  'perPage': 10 // {Integer} This parameter is used for specifying number of the items in each page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listStories(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**[Integer]**](Integer.md)| This parameter is used for finding stroies by story id. | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **language** | [**[String]**](String.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional] 
 **publishedAtStart** | **String**| This parameter is used for finding stories whose published at is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **publishedAtEnd** | **String**| This parameter is used for finding stories whose published at is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **categoriesTaxonomy** | **String**| This parameter is used for defining type of the taxonomy for the rest of categories queries. | [optional] 
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. | [optional] [default to true]
 **categoriesId** | [**[String]**](String.md)| This parameter is used for finding stories whose categories id is the specified value. | [optional] 
 **categoriesLevel** | [**[Integer]**](Integer.md)| This parameter is used for finding stories whose categories level is the specified value. | [optional] 
 **entitiesTitleText** | [**[String]**](String.md)| This parameter is used for finding stories whose entities text in title is the specified value. | [optional] 
 **entitiesTitleType** | [**[String]**](String.md)| This parameter is used for finding stories whose entities type in title is the specified value. | [optional] 
 **entitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used for finding stories whose entities dbpedia url in title is the specified value. | [optional] 
 **entitiesBodyText** | [**[String]**](String.md)| This parameter is used for finding stories whose entities text in body is the specified value. | [optional] 
 **entitiesBodyType** | [**[String]**](String.md)| This parameter is used for finding stories whose entities type in body is the specified value. | [optional] 
 **entitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used for finding stories whose entities dbpedia url in body is the specified value. | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value. | [optional] 
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value. | [optional] 
 **authorId** | [**[Integer]**](Integer.md)| This parameter is used for finding stories whose author id is the specified value. | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value. | [optional] 
 **sourceId** | [**[Integer]**](Integer.md)| This parameter is used for finding stories whose source id is the specified value. | [optional] 
 **sourceName** | [**[String]**](String.md)| This parameter is used for finding stories whose source name contains the specified value. | [optional] 
 **sourceDomain** | [**[String]**](String.md)| This parameter is used for finding stories whose source domain is the specified value. | [optional] 
 **sourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. | [optional] 
 **sourceLocationsState** | [**[String]**](String.md)| This parameter is used for finding stories whose source state/province is the specified value. | [optional] 
 **sourceLocationsCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source city is the specified value. | [optional] 
 **sourceScopesCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. | [optional] 
 **sourceScopesState** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes state/province is the specified value. | [optional] 
 **sourceScopesCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes city is the specified value. | [optional] 
 **sourceScopesLevel** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes level is the specified value. | [optional] 
 **cluster** | **Boolean**| This parameter enables clustering for the returned stories. | [optional] [default to false]
 **clusterAlgorithm** | **String**| This parameter is used for specifying the clustering algorithm. It supprts STC, Lingo and [k-means](https://en.wikipedia.org/wiki/K-means_clustering) algorithms. | [optional] [default to lingo]
 **_return** | [**[String]**](String.md)| This parameter is used for specifying return fields. | [optional] 
 **sortBy** | **String**| This parameter is used for changing the order column of the result. | [optional] [default to published_at]
 **sortDirection** | **String**| This parameter is used for changing the order direction of the result. | [optional] [default to desc]
 **cursor** | **String**| This parameter is used for finding a specific page. | [optional] [default to *]
 **perPage** | **Integer**| This parameter is used for specifying number of the items in each page. | [optional] [default to 10]

### Return type

[**Stories**](Stories.md)

### Authorization

[app_key](../README.md#app_key), [app_id](../README.md#app_id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, text/xml

<a name="listTimeSeries"></a>
# **listTimeSeries**
> TimeSeriesList listTimeSeries(opts)

List time series

This endpoint is used for getting time series by stories.

### Example
```javascript
var AylienNewsApi = require('aylien-news-api');

var apiInstance = new AylienNewsApi.DefaultApi();

// Configure API key authorization: app_id
var app_id = apiInstance.apiClient.authentications['app_id'];
app_id.apiKey = "YOUR APP ID";

// Configure API key authorization: app_key
var app_key = apiInstance.apiClient.authentications['app_key'];
app_key.apiKey = "YOUR APP KEY";

var opts = { 
  'id': [56], // {[Integer]} This parameter is used for finding stroies by story id.
  'title': "title_example", // {String} This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'body': "body_example", // {String} This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'text': "text_example", // {String} This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'language': ["language_example"], // {[String]} This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'categoriesTaxonomy': "categoriesTaxonomy_example", // {String} This parameter is used for defining type of the taxonomy for the rest of categories queries.
  'categoriesConfident': true, // {Boolean} This parameter is used for finding stories whose categories are confident.
  'categoriesId': ["categoriesId_example"], // {[String]} This parameter is used for finding stories whose categories id is the specified value.
  'categoriesLevel': [56], // {[Integer]} This parameter is used for finding stories whose categories level is the specified value.
  'entitiesTitleText': ["entitiesTitleText_example"], // {[String]} This parameter is used for finding stories whose entities text in title is the specified value.
  'entitiesTitleType': ["entitiesTitleType_example"], // {[String]} This parameter is used for finding stories whose entities type in title is the specified value.
  'entitiesTitleLinksDbpedia': ["entitiesTitleLinksDbpedia_example"], // {[String]} This parameter is used for finding stories whose entities dbpedia url in title is the specified value.
  'entitiesBodyText': ["entitiesBodyText_example"], // {[String]} This parameter is used for finding stories whose entities text in body is the specified value.
  'entitiesBodyType': ["entitiesBodyType_example"], // {[String]} This parameter is used for finding stories whose entities type in body is the specified value.
  'entitiesBodyLinksDbpedia': ["entitiesBodyLinksDbpedia_example"], // {[String]} This parameter is used for finding stories whose entities dbpedia url in body is the specified value.
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // {String} This parameter is used for finding stories whose title sentiment is the specified value.
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // {String} This parameter is used for finding stories whose body sentiment is the specified value.
  'authorId': [56], // {[Integer]} This parameter is used for finding stories whose author id is the specified value.
  'authorName': "authorName_example", // {String} This parameter is used for finding stories whose author full name contains the specified value.
  'sourceId': [56], // {[Integer]} This parameter is used for finding stories whose source id is the specified value.
  'sourceName': ["sourceName_example"], // {[String]} This parameter is used for finding stories whose source name contains the specified value.
  'sourceDomain': ["sourceDomain_example"], // {[String]} This parameter is used for finding stories whose source domain is the specified value.
  'sourceLocationsCountry': ["sourceLocationsCountry_example"], // {[String]} This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes.
  'sourceLocationsState': ["sourceLocationsState_example"], // {[String]} This parameter is used for finding stories whose source state/province is the specified value.
  'sourceLocationsCity': ["sourceLocationsCity_example"], // {[String]} This parameter is used for finding stories whose source city is the specified value.
  'sourceScopesCountry': ["sourceScopesCountry_example"], // {[String]} This parameter is used for finding stories whose source scopes country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes.
  'sourceScopesState': ["sourceScopesState_example"], // {[String]} This parameter is used for finding stories whose source scopes state/province is the specified value.
  'sourceScopesCity': ["sourceScopesCity_example"], // {[String]} This parameter is used for finding stories whose source scopes city is the specified value.
  'sourceScopesLevel': ["sourceScopesLevel_example"], // {[String]} This parameter is used for finding stories whose source scopes level is the specified value.
  'publishedAtStart': "NOW-7DAYS/DAY", // {String} This parameter is used for finding stories whose published at is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'publishedAtEnd': "NOW/DAY", // {String} This parameter is used for finding stories whose published at is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'period': "+1DAY" // {String} The size of each date range expressed as an interval to be added to the lower bound. It supports Date Math Syntax. Valid options are `+` following an integer number greater than 0 and one of the Date Math keywords. e.g. `+1DAY`, `+2MINUTES` and `+1MONTH`. Here are [Supported keywords](https://newsapi.aylien.com/docs/working-with-dates#date-math).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listTimeSeries(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**[Integer]**](Integer.md)| This parameter is used for finding stroies by story id. | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **language** | [**[String]**](String.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional] 
 **categoriesTaxonomy** | **String**| This parameter is used for defining type of the taxonomy for the rest of categories queries. | [optional] 
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. | [optional] [default to true]
 **categoriesId** | [**[String]**](String.md)| This parameter is used for finding stories whose categories id is the specified value. | [optional] 
 **categoriesLevel** | [**[Integer]**](Integer.md)| This parameter is used for finding stories whose categories level is the specified value. | [optional] 
 **entitiesTitleText** | [**[String]**](String.md)| This parameter is used for finding stories whose entities text in title is the specified value. | [optional] 
 **entitiesTitleType** | [**[String]**](String.md)| This parameter is used for finding stories whose entities type in title is the specified value. | [optional] 
 **entitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used for finding stories whose entities dbpedia url in title is the specified value. | [optional] 
 **entitiesBodyText** | [**[String]**](String.md)| This parameter is used for finding stories whose entities text in body is the specified value. | [optional] 
 **entitiesBodyType** | [**[String]**](String.md)| This parameter is used for finding stories whose entities type in body is the specified value. | [optional] 
 **entitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used for finding stories whose entities dbpedia url in body is the specified value. | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value. | [optional] 
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value. | [optional] 
 **authorId** | [**[Integer]**](Integer.md)| This parameter is used for finding stories whose author id is the specified value. | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value. | [optional] 
 **sourceId** | [**[Integer]**](Integer.md)| This parameter is used for finding stories whose source id is the specified value. | [optional] 
 **sourceName** | [**[String]**](String.md)| This parameter is used for finding stories whose source name contains the specified value. | [optional] 
 **sourceDomain** | [**[String]**](String.md)| This parameter is used for finding stories whose source domain is the specified value. | [optional] 
 **sourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. | [optional] 
 **sourceLocationsState** | [**[String]**](String.md)| This parameter is used for finding stories whose source state/province is the specified value. | [optional] 
 **sourceLocationsCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source city is the specified value. | [optional] 
 **sourceScopesCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. | [optional] 
 **sourceScopesState** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes state/province is the specified value. | [optional] 
 **sourceScopesCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes city is the specified value. | [optional] 
 **sourceScopesLevel** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes level is the specified value. | [optional] 
 **publishedAtStart** | **String**| This parameter is used for finding stories whose published at is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] [default to NOW-7DAYS/DAY]
 **publishedAtEnd** | **String**| This parameter is used for finding stories whose published at is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] [default to NOW/DAY]
 **period** | **String**| The size of each date range expressed as an interval to be added to the lower bound. It supports Date Math Syntax. Valid options are &#x60;+&#x60; following an integer number greater than 0 and one of the Date Math keywords. e.g. &#x60;+1DAY&#x60;, &#x60;+2MINUTES&#x60; and &#x60;+1MONTH&#x60;. Here are [Supported keywords](https://newsapi.aylien.com/docs/working-with-dates#date-math). | [optional] [default to +1DAY]

### Return type

[**TimeSeriesList**](TimeSeriesList.md)

### Authorization

[app_key](../README.md#app_key), [app_id](../README.md#app_id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, text/xml

<a name="listTrends"></a>
# **listTrends**
> Trends listTrends(opts)

List trends

This endpoint is used for finding news trendings based on stories resource.

### Example
```javascript
var AylienNewsApi = require('aylien-news-api');

var apiInstance = new AylienNewsApi.DefaultApi();

// Configure API key authorization: app_id
var app_id = apiInstance.apiClient.authentications['app_id'];
app_id.apiKey = "YOUR APP ID";

// Configure API key authorization: app_key
var app_key = apiInstance.apiClient.authentications['app_key'];
app_key.apiKey = "YOUR APP KEY";

var opts = { 
  'id': [56], // {[Integer]} This parameter is used for finding stroies by story id.
  'title': "title_example", // {String} This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'body': "body_example", // {String} This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'text': "text_example", // {String} This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators).
  'language': ["language_example"], // {[String]} This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes.
  'publishedAtStart': "publishedAtStart_example", // {String} This parameter is used for finding stories whose published at is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'publishedAtEnd': "publishedAtEnd_example", // {String} This parameter is used for finding stories whose published at is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates).
  'categoriesTaxonomy': "categoriesTaxonomy_example", // {String} This parameter is used for defining type of the taxonomy for the rest of categories queries.
  'categoriesConfident': true, // {Boolean} This parameter is used for finding stories whose categories are confident.
  'categoriesId': ["categoriesId_example"], // {[String]} This parameter is used for finding stories whose categories id is the specified value.
  'categoriesLevel': [56], // {[Integer]} This parameter is used for finding stories whose categories level is the specified value.
  'entitiesTitleText': ["entitiesTitleText_example"], // {[String]} This parameter is used for finding stories whose entities text in title is the specified value.
  'entitiesTitleType': ["entitiesTitleType_example"], // {[String]} This parameter is used for finding stories whose entities type in title is the specified value.
  'entitiesTitleLinksDbpedia': ["entitiesTitleLinksDbpedia_example"], // {[String]} This parameter is used for finding stories whose entities dbpedia url in title is the specified value.
  'entitiesBodyText': ["entitiesBodyText_example"], // {[String]} This parameter is used for finding stories whose entities text in body is the specified value.
  'entitiesBodyType': ["entitiesBodyType_example"], // {[String]} This parameter is used for finding stories whose entities type in body is the specified value.
  'entitiesBodyLinksDbpedia': ["entitiesBodyLinksDbpedia_example"], // {[String]} This parameter is used for finding stories whose entities dbpedia url in body is the specified value.
  'sentimentTitlePolarity': "sentimentTitlePolarity_example", // {String} This parameter is used for finding stories whose title sentiment is the specified value.
  'sentimentBodyPolarity': "sentimentBodyPolarity_example", // {String} This parameter is used for finding stories whose body sentiment is the specified value.
  'authorId': [56], // {[Integer]} This parameter is used for finding stories whose author id is the specified value.
  'authorName': "authorName_example", // {String} This parameter is used for finding stories whose author full name contains the specified value.
  'sourceId': [56], // {[Integer]} This parameter is used for finding stories whose source id is the specified value.
  'sourceName': ["sourceName_example"], // {[String]} This parameter is used for finding stories whose source name contains the specified value.
  'sourceDomain': ["sourceDomain_example"], // {[String]} This parameter is used for finding stories whose source domain is the specified value.
  'sourceLocationsCountry': ["sourceLocationsCountry_example"], // {[String]} This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes.
  'sourceLocationsState': ["sourceLocationsState_example"], // {[String]} This parameter is used for finding stories whose source state/province is the specified value.
  'sourceLocationsCity': ["sourceLocationsCity_example"], // {[String]} This parameter is used for finding stories whose source city is the specified value.
  'sourceScopesCountry': ["sourceScopesCountry_example"], // {[String]} This parameter is used for finding stories whose source scopes country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes.
  'sourceScopesState': ["sourceScopesState_example"], // {[String]} This parameter is used for finding stories whose source scopes state/province is the specified value.
  'sourceScopesCity': ["sourceScopesCity_example"], // {[String]} This parameter is used for finding stories whose source scopes city is the specified value.
  'sourceScopesLevel': ["sourceScopesLevel_example"], // {[String]} This parameter is used for finding stories whose source scopes level is the specified value.
  'field': "field_example" // {String} This parameter is used to specify the trend field.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listTrends(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**[Integer]**](Integer.md)| This parameter is used for finding stroies by story id. | [optional] 
 **title** | **String**| This parameter is used for finding stories whose title contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **body** | **String**| This parameter is used for finding stories whose body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **text** | **String**| This parameter is used for finding stories whose title or body contains a specfic keyword. It supports [boolean operators](https://newsapi.aylien.com/docs/boolean-operators). | [optional] 
 **language** | [**[String]**](String.md)| This parameter is used for finding stories whose language is the specified value. It supports [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes. | [optional] 
 **publishedAtStart** | **String**| This parameter is used for finding stories whose published at is greater than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **publishedAtEnd** | **String**| This parameter is used for finding stories whose published at is less than the specified value. [Here](https://newsapi.aylien.com/docs/working-with-dates) you can find more information about how [to work with dates](https://newsapi.aylien.com/docs/working-with-dates). | [optional] 
 **categoriesTaxonomy** | **String**| This parameter is used for defining type of the taxonomy for the rest of categories queries. | [optional] 
 **categoriesConfident** | **Boolean**| This parameter is used for finding stories whose categories are confident. | [optional] [default to true]
 **categoriesId** | [**[String]**](String.md)| This parameter is used for finding stories whose categories id is the specified value. | [optional] 
 **categoriesLevel** | [**[Integer]**](Integer.md)| This parameter is used for finding stories whose categories level is the specified value. | [optional] 
 **entitiesTitleText** | [**[String]**](String.md)| This parameter is used for finding stories whose entities text in title is the specified value. | [optional] 
 **entitiesTitleType** | [**[String]**](String.md)| This parameter is used for finding stories whose entities type in title is the specified value. | [optional] 
 **entitiesTitleLinksDbpedia** | [**[String]**](String.md)| This parameter is used for finding stories whose entities dbpedia url in title is the specified value. | [optional] 
 **entitiesBodyText** | [**[String]**](String.md)| This parameter is used for finding stories whose entities text in body is the specified value. | [optional] 
 **entitiesBodyType** | [**[String]**](String.md)| This parameter is used for finding stories whose entities type in body is the specified value. | [optional] 
 **entitiesBodyLinksDbpedia** | [**[String]**](String.md)| This parameter is used for finding stories whose entities dbpedia url in body is the specified value. | [optional] 
 **sentimentTitlePolarity** | **String**| This parameter is used for finding stories whose title sentiment is the specified value. | [optional] 
 **sentimentBodyPolarity** | **String**| This parameter is used for finding stories whose body sentiment is the specified value. | [optional] 
 **authorId** | [**[Integer]**](Integer.md)| This parameter is used for finding stories whose author id is the specified value. | [optional] 
 **authorName** | **String**| This parameter is used for finding stories whose author full name contains the specified value. | [optional] 
 **sourceId** | [**[Integer]**](Integer.md)| This parameter is used for finding stories whose source id is the specified value. | [optional] 
 **sourceName** | [**[String]**](String.md)| This parameter is used for finding stories whose source name contains the specified value. | [optional] 
 **sourceDomain** | [**[String]**](String.md)| This parameter is used for finding stories whose source domain is the specified value. | [optional] 
 **sourceLocationsCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. | [optional] 
 **sourceLocationsState** | [**[String]**](String.md)| This parameter is used for finding stories whose source state/province is the specified value. | [optional] 
 **sourceLocationsCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source city is the specified value. | [optional] 
 **sourceScopesCountry** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes country is the specified value. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. | [optional] 
 **sourceScopesState** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes state/province is the specified value. | [optional] 
 **sourceScopesCity** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes city is the specified value. | [optional] 
 **sourceScopesLevel** | [**[String]**](String.md)| This parameter is used for finding stories whose source scopes level is the specified value. | [optional] 
 **field** | **String**| This parameter is used to specify the trend field. | [optional] 

### Return type

[**Trends**](Trends.md)

### Authorization

[app_key](../README.md#app_key), [app_id](../README.md#app_id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, text/xml
