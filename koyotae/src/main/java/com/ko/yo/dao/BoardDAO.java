package com.ko.yo.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.ko.yo.model.BoardVO;

@Repository
public class BoardDAO {

	private final SqlSession sqlSession;
	
	public BoardDAO(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	public List<BoardVO> selectAll() {
		return sqlSession.selectList("BoardDAO.selectAll");
	}
}
