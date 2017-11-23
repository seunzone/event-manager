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

  /**
   *
   *
   * @param {any} req
   * @param {any} res
   * @returns {json} validate adding new center
   * @memberof Event
   */
  addCenterValidator(req, res, next) {
    const {
      centerId, capacity, location, features, description
    } = req.body;

    if (!centerId || typeof centerId === 'number') {
      return res.status(400)
        .send('Center should have a centerID and it must be a number');
    } else if (!capacity || typeof capacity === 'number') {
      return res.status(400)
        .send('Enter capacity detail in number format');
    } else if (!location) {
      return res.status(400)
        .send('Center must have a location');
    } else if (!features) {
      return res.status(400)
        .send('center should have features');
    } else if (!description) {
      return res.status(400)
        .send('Center must have descriptions');
    } next();
  }


}

const validate = new Validator();

export default validate;
