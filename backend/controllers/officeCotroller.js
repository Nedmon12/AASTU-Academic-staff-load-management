const Office = require('../model/Office')
const Hierarchy = require('../model/Hierarchy')
const Approval = require('../model/Approval')


// ADD NEW OFFICE
exports.OfficeControl.add = async (req, res, next) => {
const { id, name, position, is_department} = req.body
try {
    const newOffice = await Office.create({
        id, 
        name, 
        position, 
        is_department
    })
}
catch (err) {
    console.log(err)
    res.status(500).json({err})
}

}
//SELECT OFFICE
exports.OfficeControl.read = async (req, res, next) => {
    //const { } = req.body
try {
    const Offices =await Office.findALl()
    res.send(Offices.json())
}
catch (err) {
    console.log(err)
    res.status(500).json({err})
}

}
// UPDATE OFFICE
exports.OfficeControl.update = async (req, res, next) => {
const { id, name, position, is_department} = req.body
try {
    const updatedOffice = await Office.update({ 
        name: name, 
        position: position, 
        is_department: is_department
    },
    {
        where:{
            id: id
        }
    })
}
catch (err) {
    console.log(err)
    res.status(500).json({err})
}

}

// ADD NEW HIERARCHY
exports.HierarchyControl.add = async (req, res, next) => {
const { parent, child} = req.body
try {
    const newHierarchy = await Hierarchy.create({
        parent, 
        child
    })
}
catch (err) {
    console.log(err)
    res.status(500).json({err})
}

}
//SELECT HIERARCHY
exports.HierarchyControl.read = async (req, res, next) => {
    //const { } = req.body
try {
    const Hierarchies =await Hierarchy.findALl()
    res.send(Hierarchies.json())
}
catch (err) {
    console.log(err)
    res.status(500).json({err})
}

}
// UPDATE OFFICE
exports.HierarchyControl.update1 = async (req, res, next) => {
const { parent, child} = req.body
try {
    const updatedHierarchy = await Hierarchy.update({ 
        parent: parent
    },
    {
        where:{
            child: child
        }
    })
}
catch (err) {
    console.log(err)
    res.status(500).json({err})
}
}
exports.HierarchyControl.update2 = async (req, res, next) => {
const { parent, child} = req.body
try {
    const updatedHierarchy = await Hierarchy.update({ 
        child: child
    },
    {
        where:{
            parent: parent
        }
    })
}
catch (err) {
    console.log(err)
    res.status(500).json({err})
}
}

// ADD NEW APPROVAL
exports.ApprovalControl.add = async (req, res, next) => {
const { id, sender, receiver} = req.body
try {
    const newApproval = await Approval.create({
        id,
         sender, 
         receiver
    })
}
catch (err) {
    console.log(err)
    res.status(500).json({err})
}

}
//SELECT APPROVAL
exports.ApprovalControl.read = async (req, res, next) => {
    //const { } = req.body
try {
    const Approvals =await Approval.findALl()
    res.send(Approvals.json())
}
catch (err) {
    console.log(err)
    res.status(500).json({err})
}

}
// UPDATE APPROVAL
exports.ApprovalControl.update1 = async (req, res, next) => {
const { is, sender, receiver} = req.body
try {
    const updatedApproval = await Approval.update({ 
        sender: sender,
        receiver: receiver
    },
    {
        where:{
            id: id
        }
    })
}
catch (err) {
    console.log(err)
    res.status(500).json({err})
}
}
