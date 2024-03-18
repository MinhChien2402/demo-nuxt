import axios from 'axios'
const createStore = {
  state: {
    dataSanPham: [],
    SanPhamDetail: {},
    dataDuAn: [],
    DuAnDetail: {},
    dataBlog: {},
    Blogs: [],
    Blogg: [],
  },
  getters: {
    dataSanPham: state => state.dataSanPham,
    SanPhamDetail: state => state.SanPhamDetail,
    dataDuAn: state => state.dataDuAn,
    DuAnDetail: state => state.DuAnDetail,
    dataBlog: state => state.dataBlog,
    Blogs: state => state.Blogs,
    Blogg: state => state.Blogg,
  },
  actions: {
    async getSanPham({ commit }) {
      try {
        const res = await axios.get(`http://192.168.1.127/api/SanPham`)
        commit('SAN_PHAM', res.data)
        // console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    },
    async getSanPhamDetail({ commit }, id) {
      try {
        const res = await axios.get(`http://192.168.1.127/api/SanPham/detail/id?id=${id}`)
        commit('SANPHAM_DETAIL', res.data)
        // console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    },
    async getDuAn({ commit }) {
      try {
        const res = await axios.get(`http://192.168.1.127/api/DuAn`)
        commit('DU_AN', res.data)
        // console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    },
    async getDuAnDetail({ commit }, id) {
      try {
        const res = await axios.get(`http://192.168.1.127/api/DuAn/id?id=${id}`)
        commit('DUAN_DETAIL', res.data)
        // console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    },
    async getDataBlog({ commit }, id) {
      try {
        const res = await axios.get(`http://192.168.1.127/api/Blog/get/id?id=${id}`)
        commit('DATA_BLOG', res.data)
        // console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    },
    async getDataBlog1({ commit }, params) {
      try {
        const res = await axios.post(`http://192.168.1.127/api/Blog/getall`, params)
        commit('DATA_BLOGG', res.data)
        // console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    },
    async getBlogs({ commit }, params) {
      try {
        const res = await axios.post(`http://192.168.1.127/api/Blog/getall`, params)
        commit('BLOGS', res.data)
        // console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mutations: {
    SAN_PHAM(state, dataSanPham) {
      state.dataSanPham = dataSanPham
    },
    SANPHAM_DETAIL(state, SanPhamDetail) {
      state.SanPhamDetail = SanPhamDetail
    },
    DU_AN(state, dataDuAn) {
      state.dataDuAn = dataDuAn
    },
    DUAN_DETAIL(state, DuAnDetail) {
      state.DuAnDetail = DuAnDetail
    },
    DATA_BLOG(state, dataBlog) {
      state.dataBlog = dataBlog
    },
    DATA_BLOGG(state, Blogg) {
      state.Blogg = Blogg
    },
    BLOGS(state, Blogs) {
      state.Blogs = Blogs
    }
  },
}

export default createStore