import validator from 'validator';

/**
 *
 *
 * @class Validator
 */
class Validator {
  /**
     *
     *
     * @param {any} req
     * @param {any} res
     * @returns {json} validate adding event
     * @memberof Validator
     */
  addEventValidator(req, res, next) {
    const {
      title, date, time, venue, details
    } = req.body;
    const errors = {};
    if (title === undefined || date === undefined || time === undefined
       || venue === undefined || details === undefined) {
      res.status(400)
        .json({
          message: 'All or some of the field is/are undefined',
        });
    } else {
      // check for title
      if (!validator.isEmpty(title)) {
        if (!validator.isAlpha(title)) {
          errors.title = 'Title of event must contain only alphabets';
        }
      } else {
        errors.title = 'Title of event is required';
      }

      // check for date
      if (validator.isEmpty(date)) {
        errors.date = 'Date of event is required';
      }

      // check for time
      if (validator.isEmpty(time)) {
        errors.time = 'Time of event is required';
      }

      // check for venue
      if (!validator.isEmpty(venue)) {
        if (!validator.isLength(venue, { min: 3, max: 30 })) {
          errors.venue = 'Venue should be between 3 to 30 letters';
        }
      } else {
        errors.venue = 'Venue of event is required';
      }

      // check for venue
      if (!validator.isEmpty(details)) {
        if (!validator.isLength(details, { min: 10, max: 50 })) {
          errors.details = 'Details must be between 10 and 50 characters';
        }
      } else {
        errors.details = 'Venue of event is required';
      }
      if (Object.keys(errors).length !== 0) {
        return res.status(400)
          .json(errors);
      } next();
    }
  }

  /**
     *
     *
     * @param {any} req
     * @param {any} res
     * @returns {json} validate adding centers
     * @memberof VAlidator
     */
  addCenterValidator(req, res, next) {
    const {
      capacity, location, features, description
    } = req.body;
    const errors = {};
    if (capacity === undefined || location === undefined || features === undefined
         || description === undefined) {
      res.status(400)
        .json({
          message: 'All or some of the field is/are undefined',
        });
    } else {
      // check for title
      if (!validator.isEmpty(capacity)) {
        if (!validator.isNumeric(capacity)) {
          errors.capacity = 'Enter a number';
        }
      } else {
        errors.capacity = 'Capacity is required';
      }

      // check for location
      if (!validator.isEmpty(location)) {
        if (!validator.isAlpha(location)) {
          errors.location = 'Enter a location';
        }
      } else {
        errors.location = 'Location is required';
      }

      // check for features
      if (!validator.isEmpty(features)) {
        if (!validator.isAlpha(features)) {
          errors.features = 'Enter features';
        }
      } else {
        errors.features = 'Feature is required';
      }

      // check for description
      if (!validator.isEmpty(description)) {
        if (!validator.isLength(description, { min: 25, max: undefined })) {
          errors.description = 'description must not be less than 40 characters';
        }
      } else {
        errors.description = 'description of event is required';
      }


      if (Object.keys(errors).length !== 0) {
        return res.status(400)
          .json(errors);
      } next();
    }
  }
}


const validate = new Validator();

export default validate;

