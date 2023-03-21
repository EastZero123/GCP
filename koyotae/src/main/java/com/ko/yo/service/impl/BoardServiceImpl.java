package com.ko.yo.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ko.yo.dao.BoardDAO;
import com.ko.yo.model.BoardVO;
import com.ko.yo.service.BoardService;

@Service
public class BoardServiceImpl implements BoardService {
	
	private final BoardDAO boarddao;
	
	public BoardServiceImpl(BoardDAO boarddao) {
		this.boarddao = boarddao;
		// TODO Auto-generated constructor stub
	}

	@Override
	public List<BoardVO> selectAll() throws Exception {
		// TODO Auto-generated method stub
		return boarddao.selectAll();
	}

}
