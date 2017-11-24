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
     * @memberof Event
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
}


const validate = new Validator();

export default validate;

