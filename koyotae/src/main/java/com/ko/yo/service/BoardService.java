package com.ko.yo.service;

import java.util.List;

import com.ko.yo.model.BoardVO;

public interface BoardService {

	public List<BoardVO> selectAll() throws Exception;
}
