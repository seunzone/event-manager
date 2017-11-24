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
   *
   * get details of all centers
   * @param {any} req
   * @param {any} res
   * @returns {json}gets all centers
   * @memberof centers
   */
  getAllCenters(req, res) {
    res.status(200).json({
      centers: db.centers,
      status: 'success'
    });
}
/**
   *
   *get all centres
   * @param {any} req
   * @param {any} res
   * @returns {json}gets all centers
   * @memberof centers
   */
  getCenterById(req, res) {
    for (let i = 0; i < db.centers.length; i++) {
      if (db.centers[i].id === parseInt(req.params.id, 10)) {
        return res.status(200).json({
          center: db.centers[i],
          message: 'success',
          error: false
        });
      }
    }
    res
      .status(404)
      .json({ message: 'Error! Center not found', error: true });
}
}

const center = new Center();

export default center;

