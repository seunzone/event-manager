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
   *
   * get details of all events
   * @param {any} req
   * @param {any} res
   * @returns {json}gets all events
   * @memberof centers
   */
  getAllEvents(req, res) {
    res.status(200).json({
      events: db.events,
      status: 'success'
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
    for (let i = 0; i < db.events.length; i += 1) {
      if (parseInt(db.events[i].id, 10) === parseInt(req.params.id, 10)) {
        db.events.splice(i, 1);
        return res.status(200)
          .json({
            status: 'success',
            message: 'Event has been deleted'
          });
      }
    }
    return res.status(404)
      .send('Event not found');
  }
}

const event = new Event();

export default event;
