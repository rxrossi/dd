import Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"

window.require = require
process.env.NODE_ENV = "test"

Enzyme.configure({ adapter: new Adapter() })
