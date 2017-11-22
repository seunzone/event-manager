import db from '../models/jsondata';
// const events = db.events;
/**
 *
 *
 * @class Event
 */
class Event {
/**
   *
   *
   * @param {any} req
   * @param {any} res
   * @returns {json} adds an event
   * @memberof Event
   */
  addEvent(req, res) {
    const {
      userId, title, date, time, venue, details
    } = req.body;

    const id = db.events.length + 1;
    const newEvent = {
      id,
      userId,
      title,
      date,
      time,
      venue,
      details
    };
    db.events.push(newEvent);
    return res.status(201)
      .json({
        status: 'sucess',
        message: 'event added',
        event: newEvent
      });
  }

  /**
   * edit event
   * @param {object} req expres req object
   * @param {object} res exp res object
   * @returns {json} json
   * @memberof EventController
   */
  editEvent(req, res) {
    const { id } = req.params;
    let editEvent;

    db.events.forEach((event) => {
      if (event.id === parseInt(id, 10)) {
        event.title = req.body.title || event.title;
        event.date = req.body.date || event.date;
        event.time = req.body.time || event.time;
        event.venue = req.body.venue || event.venue;
        event.details = req.body.details || event.details;

        editEvent = event;
      }
    });
    if (editEvent) {
      return res.status(200).json({
        status: 'success',
        message: 'Event modified',
        recipe: editEvent
      });
    }
    return res.status(404).send(`event with id ${id} not found`);
  }

  /**
   * delete event
   * @param {object} req expres req object
   * @param {object} res exp res object
   * @returns {json} json
   * @memberof EventController
   */
  deleteEvent(req, res) {
    const { id } = req.params;

    db.events.forEach((event) => {
      if (event.id === parseInt(id, 10)) {
        const newEvent = db.events.filter(data => data.id !== parseInt(id, 10));
        return res.status(200).json({
          status: 'success',
          message: 'Eventdeleted',
          recipe: newEvent
        });
      }
    });
  }
}

const event = new Event();

export default event;
