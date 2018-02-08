// This module wraps static files and images.
// Very useful for icons, or any other asset that may be imported into multiple places within the react app.

export {
  default as prospectus,
} from '!file-loader?name=TexasCamp_2018_Sponsor_Prospectus_[hash].[ext]!documents/prospectus.pdf';
export {
  default as favicon,
} from '!file-loader?name=favicon.ico!favicons/favicon.ico';
