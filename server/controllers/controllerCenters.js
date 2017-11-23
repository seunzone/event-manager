import db from '../models/jsondata';
/**
 *
 *
 * @class Center
 */
class Center {
  /**
       *
       *
       * @param {any} req
       * @param {any} res
       * @returns {json} adds an center
       * @memberof Center
       */
  addCenter(req, res) {
    const {
      centerId, capacity, location, features, description
    } = req.body;

    const id = db.centers.length + 1;
    const newCenter = {
      id,
      centerId,
      capacity,
      location,
      features,
      description
    };
    db.centers.push(newCenter);
    return res.status(201)
      .json({
        status: 'sucess',
        message: 'center added',
        center: newCenter
      });
  }

  /**
       * edit center
       * @param {object} req expres req object
       * @param {object} res exp res object
       * @returns {json} json
       * @memberof CenterController
       */
  editCenter(req, res) {
    const { id } = req.params;
    let editCenter;

    db.centers.forEach((center) => {
      if (center.id === parseInt(id, 10)) {
        center.capacity = req.body.capacity || center.capacity;
        center.location = req.body.location || center.location;
        center.features = req.body.features || center.features;
        center.description = req.body.description || center.description;

        editCenter = center;
      }
    });
    if (editCenter) {
      return res.status(200).json({
        status: 'success',
        message: 'Center modified',
        center: editCenter
      });
    }
    return res.status(404).send(`center with id ${id} not found`);
  }

  /**
           * delete center
           * @param {object} req expres req object
           * @param {object} res exp res object
           * @returns {json} json
           * @memberof CenterController
           */
  deleteCenter(req, res) {
    const { id } = req.params;

    db.centers.forEach((center) => {
      if (center.id === parseInt(id, 10)) {
        const newCenter = db.centers.filter(data => data.id !== parseInt(id, 10));
        return res.status(200).json({
          status: 'success',
          message: 'Center deleted',
          center: newCenter
        });
      }
    });
  }
}

const center = new Center();

export default center;

