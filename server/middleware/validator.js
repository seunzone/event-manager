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
      userId, title, date, time, venue, details
    } = req.body;

    if (!userId) {
      return res.status(400)
        .send('Event should have a owner and must be a number');
    } else if (!title) {
      return res.status(400)
        .send('Event must have a title');
    } else if (date.length < 8 || date.length > 10) {
      return res.status(400)
        .send('Event must have a date and in this format dd/mm/yy');
    } else if (time.length < 8 || time.length > 10) {
      return res.status(400)
        .send('Enter correct time format like this hr:mn:am');
    } else if (!venue) {
      return res.status(400)
        .send('Event must have a venue');
    } else if (details.trim().length < 5) {
      return res.status(400)
        .send('Event cannot have less than 5 characters');
    } next();
  }
}

const validate = new Validator();

export default validate;
